import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.salla.sa",
        pathname: "/**/*.{jpg,jpeg,png,gif,webp,svg}",
      },
    ],
  },
};

export default nextConfig;
