import {AfterXXXEvent} from '../../../api/post/content-types/post/interfaces';

export const sendEmailsToSubscribersOnPostPublished = async (event: AfterXXXEvent) => {
  const subscribers = await strapi.entityService.findMany('plugin::users-permissions.user', {
    // filters: {
    //   $and: [
    //     {
    //       publish_at: {
    //         $lt: new Date()
    //       }
    //     },
    //     {
    //       publishedAt: {
    //         $eq: null
    //       }
    //     }
    //   ]
    // }
  })
  console.log('subscribers ', subscribers)
}
