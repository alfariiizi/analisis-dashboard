# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **marketplace product analytics application** built with Next.js 15. The application analyzes products from Indonesian marketplaces (Tokopedia, Shopee, etc.) and provides AI-powered insights through a chat interface.

### Application Purpose

**NOT a marketplace** - This is an analytics platform that:
- Scrapes product data from Indonesian marketplaces (daily/weekly/monthly based on scoring)
- Provides AI-powered chat interface for product trend analysis and insights
- Displays product performance metrics, sales trends, and competitive analysis
- Helps users make data-driven decisions about products and market opportunities

**Data Flow:**
1. Backend (Golang) orchestrates data scraping and engineering
2. Frontend displays analytics dashboards and AI chat interface
3. Users interact via chat (like ChatGPT/Claude) to analyze products
4. Users can trigger "analisis" button for deep analysis
5. AI shows query results first, then performs analysis after user approval

**Current Development Focus:**
- Frontend only - making the app look production-ready with realistic data
- Goal: "Data looks real" + "Layout and content look usable"
- Not building complex simulations, just realistic UI/UX

## Development Commands

```bash
# Install dependencies (uses pnpm)
pnpm install

# Run development server (http://localhost:3000)
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint

# Format code
prettier --write .
```

## Project Architecture

### Route Structure

The app uses Next.js 15 App Router with route groups:

- **`app/(dashboard)/`** - Main dashboard layout with sidebar and header
  - `/` - New chat page (route group: `(new-chat)`)
  - `/c/[id]` - Chat detail page with dynamic chat ID
  - `/product` - Product management
  - `/analysis` - Analysis views
  - Other dashboard pages (crm, ecommerce, banking, etc.)

- **Route Groups**: `(dashboard)` is a route group that applies shared layout without affecting URL structure. The `(new-chat)` nested route group allows the home page to share the dashboard layout.

### Layout System

Two-layer layout architecture:

1. **Root Layout** (`app/layout.tsx`):
   - Configures fonts: Geist (body) and Bricolage Grotesque (display)
   - Sets Indonesian locale (`lang="id"`)
   - Enforces dark theme only via ThemeProvider
   - Includes Google Analytics (production only)

2. **Dashboard Layout** (`app/(dashboard)/layout.tsx`):
   - Implements sidebar/header structure using shadcn/ui's Sidebar components
   - Persists sidebar state via cookies (`sidebar_state`)
   - Uses custom CSS properties for spacing: `--sidebar-width` and `--header-height`

### Component Organization

```
components/
├── ai/                          # AI-related components (ChatPrompt)
├── animate-ui/                  # Animated UI components from animate-ui registry
├── ui/                          # shadcn/ui components
│   ├── shadcn-io/              # Extended shadcn components (AI prompt input, etc.)
│   └── [component].tsx          # Core UI primitives
├── layout/                      # Layout components (theme provider, etc.)
├── motion-primitives/           # Animation components (GlowEffect, TextLoop)
├── typography/                  # Typography components
├── app-sidebar.tsx              # Main application sidebar
├── site-header.tsx              # Site header component
├── nav-*.tsx                    # Navigation components
└── page-container.tsx           # Page wrapper component
```

### Key Component Patterns

- **ChatPrompt Component**: Reusable AI chat input with mode selection (Percakapan/Analisis) and animated effects
- **Navigation**: Uses data from `@data/sidebar.tsx` for sidebar navigation structure
- **Page Components**: Typically in `_components/` subdirectories within route folders (Next.js private folders convention)

### Data and State Management

- **Static Data**: Stored in `@data/` directory (sidebar, pricing, features, etc.)
- **State Management**: Uses Zustand (`store/spinner-store.ts`)
- **Custom Hooks**: Located in `hooks/` directory
  - `use-mobile.ts` - Mobile breakpoint detection
  - `use-toast.ts` - Toast notifications
  - `use-controlled-state.tsx` - Controlled component pattern
  - `use-is-in-view.tsx` - Intersection observer

### Utility Libraries

Located in `lib/`:
- `utils.ts` - Tailwind class merging utilities
- `ga.ts` - Google Analytics initialization
- `generate-meta.ts` - SEO metadata generation
- `compose-refs.ts` - Ref composition utility
- `get-strict-context.tsx` - Type-safe React context creation

### Styling

- **Tailwind CSS v4**: Using latest version with PostCSS
- **CSS Variables**: Theme configured via CSS variables in `globals.css`
- **Container Queries**: Uses `@container/main` for responsive layouts
- **Dark Theme Only**: Application is locked to dark mode

### TypeScript Configuration

- Path aliases configured: `@/*` maps to project root
- Target: ES2017
- Strict mode enabled
- Key disabled ESLint rules (see `.eslintrc.json`):
  - `@typescript-eslint/no-explicit-any`
  - `react-hooks/exhaustive-deps`
  - `@typescript-eslint/no-unused-vars`

### UI Component System

Built on shadcn/ui with:
- Custom registry from animate-ui (`@animate-ui`)
- Radix UI primitives
- Lucide React icons
- Additional libraries: @tabler/icons-react, @remixicon/react

### AI/Chat Features

- Uses Vercel AI SDK (`ai`, `@ai-sdk/react`)
- Custom chat interface components in `components/ui/shadcn-io/ai/`
- Mode selection: "Percakapan" (Chat) and "Analisis" (Analysis)
- Markdown rendering with syntax highlighting (shiki, react-syntax-highlighter)
- Math support (KaTeX, remark-math, rehype-katex)

## Important Notes

- The application is Indonesian-language focused
- All theme configuration forces dark mode
- Package manager is pnpm (see `packageManager` in package.json)
- Image sources must be whitelisted in `next.config.ts` (currently: i.pravatar.cc, bundui-images.netlify.app)
- Development focused on product/business analysis features
- Uses Next.js 15 features (async params, React 19)
