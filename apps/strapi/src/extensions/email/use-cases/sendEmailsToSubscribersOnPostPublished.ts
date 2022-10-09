import {Post, Troop} from '../../../api/post/content-types/post/interfaces';

export const sendEmailsToSubscribersOnPostPublished = async (postData: Post) => {
  strapi.log.info(`Preparing data for sending notification for post with id = ${postData.id}`)
  console.log('postData', postData)
  const troopIds = (postData.troops as unknown as Troop[]).map(troop => troop.id)
  console.log('troopIds', troopIds)
  const subscribers = await strapi.entityService.findMany('plugin::users-permissions.user', {
    filters: {
      subscribing_troops: {
        id: {
          $in: troopIds
        }
      }
    }
  })
  console.log('subscribers ', subscribers)

  await Promise.all(subscribers.map(subscriber => {
    try {
      console.log('sending notification emial to ', subscriber.email)
      return strapi
        .plugin('email-designer')
        .service('email')
        .sendTemplatedEmail( {to: subscriber.email},
          {templateReferenceId: 2},
          {
            // this object must include all variables you're using in your email template
          }
        );
    } catch (err) {
      strapi.log.debug('📺 Failed to send email: ', err);
    }
  }))

}
