import {Post} from '../../src/api/post/content-types/post/interfaces';
import {Strapi} from '@strapi/strapi';

export default {
  // each minute
  '*/1 * * * *': async ({strapi}: {strapi: Strapi}) => {
    console.log('cron job - checking scheduled publish')
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


    // fetch articles to publish
    // const posts = await strapi.entityService.find('api::post.post', 1);

    // console.log(posts)

    // const {results: draftPostToPublish} = await strapi.api.post.services.post.find({
    //   _publicationState: 'draft', // preview returns both draft and published entries
    //   published_at_null: true, // so we add another condition here to filter entries that have not been published
    //   publish_at_lt: new Date(),
    // });
    // console.log(draftPostToPublish)

    // update published_at of articles
    // await Promise.all(draftPostToPublish.map(post => {
    //   return strapi.api.post.services.post.update(
    //     {id: post.id},
    //     {published_at: new Date()}
    //   );
    // }));
  },
}
