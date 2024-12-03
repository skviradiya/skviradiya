import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.BASE_PATH,
  assetPrefix: process.env.BASE_PATH,

  images: {
    unoptimized: true,
    localPatterns: [
      {
        pathname: `${process.env.BASE_PATH}/**`,
        search: '',
      },
    ],
  },
};

module.exports = nextConfig;