import { apiAuth } from "@/lib/auth";
import { CreateClientConfig } from "./client/client.gen";

export const createClientConfig: CreateClientConfig = (config) => {
  const baseUrl = "/api";

  return {
    ...config,
    baseUrl,
    auth(auth) {
      if (auth.type === "http" && auth.scheme === "bearer") {
        return apiAuth();
      }
    }
  };
};
