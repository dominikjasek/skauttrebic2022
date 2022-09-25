export default [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'script-src': ["'self'", 'editor.unlayer.com'],
          'frame-src': ["'self'", 'editor.unlayer.com'],
          'img-src': ["'self'", 'data:', 'blob:', 'cdn.jsdelivr.net', 'strapi.io', '*.amazonaws.com'],
          'media-src': ["'self'", 'data:', 'blob:', '*.amazonaws.com'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
