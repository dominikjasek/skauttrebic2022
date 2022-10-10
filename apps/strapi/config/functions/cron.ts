import {Post} from '../../src/api/post/content-types/post/interfaces';
import {Strapi} from '@strapi/strapi';

export default {
  // each minute
  '*/1 * * * *': async ({strapi}: {strapi: Strapi}) => {
    const postsToPublish: Post[] = await strapi.entityService.findMany('api::post.post', {
      filters: {
        $and: [
          {
            schedule_publish_at: {
              $lt: new Date()
            }
          },
          {
            publishedAt: {
              $eq: null
            }
          }
        ]
      },
    })

    // Publish all scheduled posts
    await Promise.all(postsToPublish.map(post => {
      strapi.log.info(`Publishing scheduled post with title = "${post.title}"`)
      return strapi.entityService.update('api::post.post', post.id, {
        data: {
          publishedAt: new Date()
        }
      });
    }));
  },
}
