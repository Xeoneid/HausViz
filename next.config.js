/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // basePath only needed when running under a sub-path (GitHub Pages for non-root repos)
  ...(process.env.GITHUB_ACTIONS && {
    basePath: '/HausViz',
    assetPrefix: '/HausViz/',
  }),
}

module.exports = nextConfig
