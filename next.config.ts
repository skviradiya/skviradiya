import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/skviradiya",
  assetPrefix: "/skviradiya/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
