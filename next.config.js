/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // output: 'export',
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    // ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // exportPathMap: async function(
  //   defaultPathMap,
  //   { dev, dir, outDir, distDir, buildId }
  // ) {
  //   return {
  //     '/': { page: '/' },
  //     '/blog': { page: '/blog' },
  //     '/resume': { page: '/resume' },
  //     '/blog/posts/Welcome-to-My-Blog-An-Introduction-ldKJH98LKJdkfL': { page: '/blog/posts/[post_route]' },
  //     '/blog/posts/ObsidianGitSync-Crafting-a-Custom-Sync-Solution-for-Obsidian-Notes-GHFFfshf856fgh': { page: '/blog/posts/[post_route]' },
  //   }
  // },
}

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
});

module.exports = withMDX(nextConfig);
