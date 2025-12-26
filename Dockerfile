# Frontend User Dockerfile
# Multi-stage build for Next.js application

# Stage 1: Dependencies
FROM node:20-alpine AS deps

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Stage 2: Builder
FROM node:20-alpine AS builder

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Copy dependencies
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build Next.js app
ENV NEXT_TELEMETRY_DISABLED 1
RUN pnpm build

# Stage 3: Runtime
FROM node:20-alpine AS runner

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Create non-root user
RUN addgroup -g 1001 nodejs && \
    adduser -D -u 1001 -G nodejs nextjs

# Copy necessary files
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Change ownership
RUN chown -R nextjs:nodejs /app

# Switch to non-root user
USER nextjs

# Expose port
EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# Run the application
CMD ["node", "server.js"]
