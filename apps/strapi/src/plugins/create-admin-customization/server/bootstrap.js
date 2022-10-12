'use strict';

const {getAbsoluteAdminUrl} = require('@strapi/utils');

module.exports = async ({strapi}) => {
  // bootstrap phase
  strapi.db.lifecycles.subscribe({
    models: ['admin::user'],

    async beforeCreate(event) {
      // Do not allow to create super admin user
      const SUPER_ADMIN_ROLE_ID = 1
      if (event.params.data.roles.includes(SUPER_ADMIN_ROLE_ID)) {
        const isAllowedToCreateSuperAdmin = process.env.ALLOW_CREATE_SUPER_ADMIN_STRAPI_USER === '1' || process.env.ALLOW_CREATE_SUPER_ADMIN_STRAPI_USER === 'true'
        if (!isAllowedToCreateSuperAdmin) {
          throw new Error('Uživatele s rolí Super Admin může vytvořit jenom programátor webu - Šíša.')
        }
      }

      // Set default language to czech
      event.params.data.preferedLanguage = 'cs'
    },

    async afterCreate({result}) {
      // Send email to new strapi user
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
