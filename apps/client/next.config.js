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

// Injected content via Sentry wizard below
const { withSentryConfig } = require('@sentry/nextjs')

module.exports = withSentryConfig(
  module.exports,
  {
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options

    // Suppresses source map uploading logs during build
    silent: true,
    org: 'dominikjasek',
    project: 'skauttrebic',
  },
  {
    // For all available options, see:
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

    // Upload a larger set of source maps for prettier stack traces (increases build time)
    widenClientFileUpload: true,

    // Transpiles SDK to be compatible with IE11 (increases bundle size)
    transpileClientSDK: true,

    // Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers (increases server load)
    tunnelRoute: '/monitoring',

    // Hides source maps from generated client bundles
    hideSourceMaps: true,

    // Automatically tree-shake Sentry logger statements to reduce bundle size
    disableLogger: true,
  }
)
