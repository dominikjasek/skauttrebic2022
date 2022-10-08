export default {
  // each minute
  '*/1 * * * *': async ({strapi}) => {
    console.log('cron job - checking scheduled publish')
    console.log(await strapi.entityService.findMany('api::post.post', {
      filters: {
        $and: [
          {
            publish_at: {
              $lt: new Date()
            }
          },
          {
            publishedAt: {
              $eq: null
            }
          }
        ]
      }
    }))

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
