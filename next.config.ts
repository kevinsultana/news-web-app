import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static01.nyt.com",
      },
    ],
  },
};

export default nextConfig;
