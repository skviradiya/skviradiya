import type { NextConfig } from "next";
export const isProduction = process.env.NODE_ENV === "production";

console.log("Testing",process.env.basePath)

const nextConfig: NextConfig = {
  output: 'export',
  // reactStrictMode: true,
  images: {
    unoptimized: true, // Necessary if you use Next.js image component
  },
  basePath: isProduction?process.env.basePath:'',
  assetPrefix:isProduction? process.env.basePath:'',
  env: {
    basePath: process.env.basePath,
  },
};

module.exports = nextConfig;
