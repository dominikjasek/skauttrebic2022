// eslint-disable-next-line no-undef,@typescript-eslint/no-var-requires
const { routes } = require('./routes')

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return routes
  },
  reactStrictMode: true,
  compiler: {
    emotion: true
  }
}

// eslint-disable-next-line no-undef
module.exports = nextConfig
