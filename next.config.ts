import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Necessary if you use Next.js image component
  },
  basePath: '/skviradiya',
  assetPrefix: '/skviradiya',
};

module.exports = nextConfig;
