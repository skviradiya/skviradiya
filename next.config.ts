import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.BASE_PATH,
  assetPrefix: process.env.BASE_PATH,

  images: {
    unoptimized: true,
    path :process.env.BASE_PATH
  },
};

module.exports = nextConfig;