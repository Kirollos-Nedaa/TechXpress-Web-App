import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  experimental: {
    turbo: {
      resolveAlias: {
        react: "react",
        "react-dom": "react-dom",
      },
    },
  },
};

export default nextConfig;
