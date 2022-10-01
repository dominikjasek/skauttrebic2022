/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/testik',
        destination: '/test'
      }
    ]
  },
  reactStrictMode: true,
  compiler: {
    emotion: true
  }
}

// eslint-disable-next-line no-undef
module.exports = nextConfig
