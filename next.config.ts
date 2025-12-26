import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc"
      },
      {
        protocol: "https",
        hostname: "bundui-images.netlify.app"
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      }
    ]
  },
  env: {
    NEXT_PUBLIC_BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL
  },
  crossOrigin: "anonymous"
};

export default nextConfig;
