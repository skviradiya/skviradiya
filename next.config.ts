import type { NextConfig } from "next";
export const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: 'export',
  // reactStrictMode: true,
  // trailingSlash: true,
  basePath: isProduction?process.env.basePath:'',
  // assetPrefix:isProduction? process.env.basePath:'',
  trailingSlash: true,  
};

module.exports = nextConfig;
