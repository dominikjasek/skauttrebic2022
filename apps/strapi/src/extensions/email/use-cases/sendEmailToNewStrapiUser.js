/* eslint-disable no-undef */

const EMAIL_TEMPLATE = require('../templates/emailTemplates.ts')

module.exports = async (options) => {
  strapi.log.info(`sending invitation email for new strapi user with email: ${options.to}`)
  try {
    await strapi
      .plugin('email-designer')
      .service('email')
      .sendTemplatedEmail({ to: options.to },
        { templateReferenceId: EMAIL_TEMPLATE.STRAPI_USER_CREATE },
        {
          inviteLink: options.inviteLink,
        }
      );
  } catch (err) {
    strapi.log.debug('📺 Failed to send email: ', err);
  }
};
