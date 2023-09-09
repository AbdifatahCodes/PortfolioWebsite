/** @type {import('next').NextConfig} */

const { PagePaths } = require("./pagePaths.config")

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return PagePaths;
  },
}

module.exports = nextConfig
