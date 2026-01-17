/**
 * photo-gallery controller
 */

import { factories } from '@strapi/strapi'

const removeDiacritics = (str: string): string => {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

const isAuthorized = (user_troops: any, gallery: any, troops: any): boolean => {
  let confidential = false
  for (const troop of troops) {
    if (removeDiacritics(gallery?.label.toLowerCase()) === removeDiacritics(troop.name?.toLowerCase())) {
      confidential = troop.confidential
      break
    }
  }
  if (!confidential) return true

  for (const user_troop of user_troops) {
    if (removeDiacritics(gallery.label.toLowerCase()) === removeDiacritics(user_troop.name.toLowerCase())) {
      return true
    }
  }
  return false
}

export default factories.createCoreController('api::photo-gallery.photo-gallery', ({ strapi }) => ({
  async find(ctx) {
    // Calling the default core action
    // eslint-disable-next-line prefer-const
    let { data, meta } = await super.find(ctx)

    const user = ctx.state.user
    if (!user) {
      return ctx.unauthorized('You must be logged in to view photo-gallery')
    }

    const user_troops = (await strapi.entityService.findOne('plugin::users-permissions.user', user.id, {
      populate: ['subscribing_troops'],
    })).subscribing_troops
    const troops = await strapi.entityService.findMany('api::troop.troop')

    data.attributes.troops = data.attributes.troops.filter((gallery: any) => isAuthorized(user_troops, gallery, troops))

    return { data, meta }
  }
}));
