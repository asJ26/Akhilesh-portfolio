/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/Akhilesh-portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Akhilesh-portfolio/' : '',
}

module.exports = nextConfig
