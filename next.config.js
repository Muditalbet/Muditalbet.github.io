/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**.googleusercontent.com',
          port: '',
        },
      ],
    },
  }

module.exports = nextConfig