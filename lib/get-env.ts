import { env } from "next-runtime-env";

type Key = "NEXT_PUBLIC_BACKEND_URL" | "BACKEND_URL";

export default function getEnv(key: Key): string {
  console.debug({
    key,
    envProcess: process.env[key],
    envNextRuntime: env(key)
  });

  const config = env(key) ?? process.env[key] ?? "";
  return config;
}
