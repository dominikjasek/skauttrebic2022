/**
 * post controller
 */

import { factories } from '@strapi/strapi'

const isAuthorized = (user_troops: any, post_troops: any): boolean => {
  // On of the post_troops must not be confidential of must be in user_troops
  for (const post_troop of post_troops) {
    if (!post_troop.attributes.confidential) {
      return true
    }
    for (const user_troop of user_troops) {
      if (post_troop.id === user_troop.id) {
        return true
      }
    }
  }
  return false
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
    // Calling the default core action
    // eslint-disable-next-line prefer-const
    let { data, meta } = await super.find(ctx)

    const user = ctx.state.user
    if (!user) {
      data = data.map(anonymizePost)
      return { data, meta }
    }

    const user_troops = (await strapi.entityService.findOne('plugin::users-permissions.user', user.id, {
      populate: ['subscribing_troops'],
    })).subscribing_troops

    data = data.map((post: any) => {
      const hasAccess = isAuthorized(user_troops, post.attributes.troops.data)
      return hasAccess ? post : anonymizePost(post)
    })

    return { data, meta }
  },

  async findOne(ctx) {
    // Calling the default core action
    // eslint-disable-next-line prefer-const
    let { data, meta } = await super.findOne(ctx);

    const user = ctx.state.user
    if (!user) {
      data = anonymizePost(data)
      return { data, meta }
    }

    const user_troops = (await strapi.entityService.findOne('plugin::users-permissions.user', user.id, {
      populate: ['subscribing_troops'],
    })).subscribing_troops

    const hasAccess = isAuthorized(user_troops, data.attributes.troops.data)
    return { data: hasAccess ? data : anonymizePost(data), meta }
  },
}));
