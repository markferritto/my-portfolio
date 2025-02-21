import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placecats.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
