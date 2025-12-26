import { defineConfig } from "@hey-api/openapi-ts";

/**
 * Hey API Configuration
 *
 * Generates TypeScript client from OpenAPI schema
 *
 * Workflow:
 * 1. Run `pnpm get:openapi` to download the latest OpenAPI schema from backend
 * 2. Run `pnpm generate:api` to generate TypeScript client from the local schema
 *
 * The schema is now stored locally in openapi.json for better version control
 * and offline development.
 */
export default defineConfig({
  // Use local OpenAPI schema file (downloaded via `pnpm get:openapi`)
  input: "./openapi.json",
  output: "api/client",
  logs: "/logs",
  plugins: [
    {
      name: "@hey-api/client-fetch",
      runtimeConfigPath: "../runtime-config"
    },
    {
      name: "@tanstack/react-query",
      queryOptions: true,
      queryKeys: {
        enabled: true,
        tags: true
      },
      infiniteQueryOptions: true,
      infiniteQueryKeys: {
        enabled: true,
        tags: true
      },
      mutationOptions: true
    }
  ]
});
