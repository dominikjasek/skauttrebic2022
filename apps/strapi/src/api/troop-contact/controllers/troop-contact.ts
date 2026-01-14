/**
 * troop-contact controller
 */

import { factories } from '@strapi/strapi'
import { Context } from 'koa'

const isAuthorized = async (ctx: Context, strapi: any): Promise<boolean> => {
  const jwt = ctx.request.header.authorization?.split(' ')[1]
  const verify = strapi.service('plugin::users-permissions.jwt').verify
  const isAuthorized = jwt ? await verify(jwt) : false
  return isAuthorized
}

const anonymizeContactCard = (contactCard: any) => {
  return {
    ...contactCard,
    phone: null
  }
}

// Anonymize all but first two contacts
const anonymizeTroop = (troop: any) => {
  if (troop.contactCards.length <= 2) return troop
  return {
    id: troop.id,
    name: troop.name,
    contactCards: [
      troop.contactCards[0],
      troop.contactCards[1],
      ...troop.contactCards.slice(2).map(anonymizeContactCard)
    ]
  }
}

export default factories.createCoreController('api::troop-contact.troop-contact', ({ strapi }) => ({
  async find(ctx) {
    const isUserAuthorized = await isAuthorized(ctx, strapi)

    // Calling the default core action
    // eslint-disable-next-line prefer-const
    let { data, meta } = await super.find(ctx);

    if (!isUserAuthorized) {
      data.attributes.troop = data.attributes.troop.map(anonymizeTroop)
    }

    return { data, meta };
  }
}));
