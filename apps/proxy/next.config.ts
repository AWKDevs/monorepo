import { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    middleware: true, // Ensure middleware is enabled
  },
};

export default nextConfig;

