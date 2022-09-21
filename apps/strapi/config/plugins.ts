module.exports = ({ env }) => ({
  email: {
    config: {
      provider: 'strapi-provider-email-sendinblue',
      providerOptions: {
        sendinblue_api_key: env('SIB_API_KEY', 'xkeysib-0987654321-abcdef'),
        sendinblue_default_replyto: env('SIB_DEFAULT_REPLY_TO', 'contact@example.com'),
        sendinblue_default_from: env('SIB_DEFAULT_FROM', 'no-reply@example.com'),
        sendinblue_default_from_name: env('SIB_DEFAULT_FROM_NAME', 'Sender Name'),
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
});
