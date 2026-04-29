import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.DEPLOY ? "/skviradiya" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
