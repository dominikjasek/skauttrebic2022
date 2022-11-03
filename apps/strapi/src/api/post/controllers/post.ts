/**
 * post controller
 */

import { factories } from '@strapi/strapi'
import { Context } from 'koa';

const isAuthorized = async (ctx: Context, strapi: any): Promise<boolean> => {
  const jwt = ctx.request.header.authorization?.split(' ')[1]
  const verify = strapi.service('plugin::users-permissions.jwt').verify
  const isAuthorized = jwt ? await verify(jwt) : false
  return isAuthorized
}

const anonymizePost = (post: any) => {
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
}

export default factories.createCoreController('api::post.post', ({ strapi }) => ({
  async find(ctx) {
    const isUserAuthorized = await isAuthorized(ctx, strapi)

    // Calling the default core action
    // eslint-disable-next-line prefer-const
    let { data, meta } = await super.find(ctx);

    if (!isUserAuthorized) {
      data = data.map(anonymizePost)
    }

    return { data, meta };
  },

  async findOne(ctx) {
    const isUserAuthorized = await isAuthorized(ctx, strapi)

    // Calling the default core action
    // eslint-disable-next-line prefer-const
    let { data, meta } = await super.findOne(ctx);

    if (!isUserAuthorized) {
      data = anonymizePost(data)
    }

    return { data, meta };
  },
}));
