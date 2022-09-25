'use strict';

const {getAbsoluteAdminUrl} = require('@strapi/utils');

module.exports = async ({strapi}) => {
  // bootstrap phase
  strapi.db.lifecycles.subscribe({
    models: ['admin::user'],

    async afterCreate({result}) {
      const {registrationToken} = result;
      if (!registrationToken) return;

      const inviteLink = `${getAbsoluteAdminUrl(strapi.config)}/auth/register?registrationToken=${registrationToken}`;

      try {
        await strapi
          .plugin('email-designer')
          .service('email')
          .sendTemplatedEmail( {to: result.email},
            {templateReferenceId: 1},
            {
            // this object must include all variables you're using in your email template
              inviteLink,
            }
          );
      } catch (err) {
        strapi.log.debug('📺 Failed to send email: ', err);
      }
    },
  });
};
