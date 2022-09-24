module.exports = ({ env }) => ({
  email: {
    config: {
      provider: 'strapi-provider-email-sendinblue',
      settings: {
        defaultFrom: 'neodpovidat@skauttrebic.cz',
        defaultFromNa: 'Skaut Třebíč',
        defaultReplyTo: 'neodpovidat@skauttrebic.cz'
      },
      providerOptions: {
        sendinblue_api_key: env('SIB_API_KEY', ''),
        sendinblue_default_replyto: env('SIB_DEFAULT_REPLY_TO', 'neodpovidat@skauttrebic.cz'),
        sendinblue_default_from: env('SIB_DEFAULT_FROM', 'neodpovidat@skauttrebic.cz'),
        sendinblue_default_from_name: env('SIB_DEFAULT_FROM_NAME', 'Skaut Třebíč'),
      },
    },
  },

  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('AWS_ACCESS_KEY_ID'),
        secretAccessKey: env('AWS_ACCESS_SECRET'),
        region: 'eu-central-1',
        params: {
          Bucket: env('AWS_S3_BUCKET_NAME'),
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },

  'create-admin-user-invite-email': {
    enabled: true,
    resolve: './src/plugins/create-admin-user-invite-email'
  },

});
