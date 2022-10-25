import { EMAIL_TEMPLATE } from '../templates/emailTemplates';

export const sendEmailToNewStrapiUser = async (options: {to: string, inviteLink: string}) => {
  strapi.log.info(`sending invitation email for new strapi user with email: ${options.to}`)
  try {
    await strapi
      .plugin('email-designer')
      .service('email')
      .sendTemplatedEmail({ to: options.to },
        { templateReferenceId: EMAIL_TEMPLATE.STRAPI_USER_CREATE },
        {
          // this object must include all variables you're using in your email template
          inviteLink: options.inviteLink,
        }
      );
  } catch (err) {
    strapi.log.debug('📺 Failed to send email: ', err);
  }
}
