/**
 * post controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::post.post', ({ strapi }) => ({
  async find(ctx) {
    const jwt = ctx.request.header.authorization?.split(' ')[1]
    const verify = strapi.service('plugin::users-permissions.jwt').verify

    const isAuthorized = jwt ? await verify(jwt) : false

    // Calling the default core action
    // eslint-disable-next-line prefer-const
    let { data, meta } = await super.find(ctx);

    if (!isAuthorized) {
      data = data.map(post => {
        if (post.attributes.public) return post
        return {
          ...post,
          id: post.id,
          attributes: {
            ...post.attributes,
            title: null,
            content: null,
            files: null
          }
        }
      })
    }

    return { data, meta };
  },
}));
