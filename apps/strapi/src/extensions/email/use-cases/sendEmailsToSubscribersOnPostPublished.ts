import { Post, Troop } from '../../../api/post/content-types/post/interfaces';
// import EMAIL_TEMPLATE from '../templates/emailTemplates';

const EMAIL_TEMPLATE = require('../templates/emailTemplates')

export const sendEmailsToSubscribersOnPostPublished = async (postData: Post) => {
  // I need to fetch post once again because in case of cron, we dont receive here troops attribute inside postData
  const post: Post = await strapi.entityService.findOne('api::post.post', postData.id, {
    populate: {
      troops: true
    }
  })
  strapi.log.info(`Preparing data for sending notification for post with id = ${post.id}`)
  const troopIds = (post.troops as unknown as Troop[]).map(troop => troop.id)
  const subscribers = await strapi.entityService.findMany('plugin::users-permissions.user', {
    filters: {
      subscribing_troops: {
        id: {
          $in: troopIds
        }
      }
    }
  })

  await Promise.all(subscribers.map(subscriber => {
    try {
      strapi.log.info(`sending notification email to ${subscriber.email}`)
      return strapi
        .plugin('email-designer')
        .service('email')
        .sendTemplatedEmail( { to: subscriber.email, fromName: 'Skaut' },
          { templateReferenceId: EMAIL_TEMPLATE.POST_PUBLISH },
          {
            title: post.title,
            content: post.content,
            link: `${process.env.FRONTEND_URL}/aktualita/${post.id}`
          }
        );
    } catch (err) {
      strapi.log.debug('📺 Failed to send notification email: ', err);
    }
  }))

}
