/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/testik',
        destination: '/test'
      }
    ]
  }
}

module.exports = nextConfig
