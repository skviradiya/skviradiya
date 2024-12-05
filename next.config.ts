import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.BASE_PATH,
  assetPrefix: process.env.BASE_PATH,
  env:{
    BASE_PATH: process.env.BASE_PATH||''
  },
  images: {
    unoptimized: true,
    
  },
};

module.exports = nextConfig;