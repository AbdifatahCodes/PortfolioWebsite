/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
  //     '/blog/posts/Welcome-to-My-Blog:-An-Introduction-ldKJH98LKJdkfL': { page: '/blog/posts/[post_route]' },
  //   }
  // },
}

module.exports = nextConfig
