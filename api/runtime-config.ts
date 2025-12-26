import { apiAuth } from "@/lib/auth";
import { CreateClientConfig } from "./client/client.gen";

export const createClientConfig: CreateClientConfig = (config) => {
  // const baseUrl = "/api";
  const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8000";

  return {
    ...config,
    baseUrl,
    auth(auth) {
      if (auth.type === "http" && auth.scheme === "bearer") {
        return apiAuth();
      }
    },
    headers: {
      ...config?.headers,
      "ngrok-skip-browser-warning": true
    }
  };
};
