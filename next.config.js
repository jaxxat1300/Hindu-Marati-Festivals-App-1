/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    unoptimized: true
  },
  output: 'export',
  trailingSlash: true,
  basePath: '/Hindu-Marati-Festivals-App-1',
  assetPrefix: '/Hindu-Marati-Festivals-App-1'
}

module.exports = nextConfig