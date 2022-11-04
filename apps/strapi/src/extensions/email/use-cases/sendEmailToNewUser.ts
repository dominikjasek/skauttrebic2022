// import EMAIL_TEMPLATE from '../templates/emailTemplates';

const EMAIL_TEMPLATE = require('../templates/emailTemplates')

export const sendEmailToNewUser = async (options: {to: string, link: string}) => {
  strapi.log.info(`sending invitation email to new user with email: ${options.to}`)
  try {
    await strapi
      .plugin('email-designer')
      .service('email')
      .sendTemplatedEmail({ to: options.to },
        { templateReferenceId: EMAIL_TEMPLATE.USER_CREATE },
        {
          // this object must include all variables you're using in your email template
          link: options.link,
        }
      );
  } catch (err) {
    strapi.log.debug('📺 Failed to send email: ', err);
  }
}
