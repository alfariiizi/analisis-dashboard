export const createClientConfig = (config: any) => {
  const baseUrl = "/api";

  return {
    ...config,
    baseUrl
  };
};
