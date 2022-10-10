import {sendEmailsToSubscribersOnPostPublished} from '../../../../extensions/email/use-cases/sendEmailsToSubscribersOnPostPublished';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const {ForbiddenError} = require('@strapi/utils').errors;
import {AfterXXXEvent, Post} from './interfaces';

const MAX_TIME_DIFFERENCE_TO_RESOLVE_AS_JUST_PUBLISHED = 300 // millisecods

const timeDifference = (earlierDate: Date, laterDate: Date) => {
  return laterDate.getTime() - earlierDate.getTime()
}

/**
 * returns true if post was published
 * returns false if any other action was made without changing publish status to true
 * @param event
 */
const postWasJustPublished = (event: AfterXXXEvent) => {
  console.log(event.result)
  if (event.result.publishedAt === null) {
    return false
  }

  const diff = timeDifference(new Date(event.result.publishedAt), new Date(event.result.updatedAt))
  console.log('timedifference = ', diff)
  if (diff <= MAX_TIME_DIFFERENCE_TO_RESOLVE_AS_JUST_PUBLISHED) {
    console.log('Post was just published!!!')
    return true
  }
}

const handlePostPublished = async (event: AfterXXXEvent) => {
  // Strapi doesn`t have afterPublished event, therefore we need to fake it this way.
  // If updatedAt is close to publishedAt, we claim this was publish event
  if (postWasJustPublished(event)) {
    await sendEmailsToSubscribersOnPostPublished(event.result)
  }
}

const validateTroops = (troops: number[]) => {
  if (troops === undefined || troops.length === 0) {
    throw new ForbiddenError('Vyberte oddíl(y). Příspěvek musí mít alespoň 1 oddíl.');
  }
}

export default {
  async beforeUpdate(event: AfterXXXEvent) {
    const newPost: Post = event.params.data
    const currentPost: Post = await strapi.entityService.findOne('api::post.post', event.params.where.id, {populate: ['troops']})
    const mergedPost: Post = {...currentPost, ...newPost}
    const troops = mergedPost.troops as unknown as number[] | undefined

    validateTroops(troops)
  },

  async beforeCreate(event) {
    const newPost: Post = event.params.data
    const troops = newPost.troops as unknown as number[] | undefined

    validateTroops(troops)
  },

  async afterCreate(event: AfterXXXEvent) {
    await handlePostPublished(event)
  },

  async afterUpdate(event) {
    await handlePostPublished(event)
  }

}
