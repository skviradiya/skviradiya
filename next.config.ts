import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/skviradiya',
  images: {
    unoptimized: true,
    path: '/skviradiya'
  },
};

module.exports = nextConfig;
