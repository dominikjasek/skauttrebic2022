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
  },
  env: {
    API_URL: process.env.API_URL,
    GRAPHQL_API_URL: process.env.GRAPHQL_API_URL
  }
}

// eslint-disable-next-line no-undef
module.exports = nextConfig
