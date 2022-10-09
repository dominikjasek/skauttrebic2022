import {sendEmailsToSubscribersOnPostPublished} from '../../../../extensions/email/use-cases/sendEmailsToSubscribersOnPostPublished';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const {ForbiddenError} = require('@strapi/utils').errors;
import {AfterXXXEvent, Post} from './interfaces';

const MAX_TIME_DIFFERENCE_TO_RESOLVE_AS_JUST_PUBLISHED = 300 // millisecods

const timeDifference = (date1: Date, date2: Date) => {
  return date2.getTime() - date1.getTime()
}

/**
 * returns true if post was published
 * returns false if any other action was made without changing publish status to true
 * @param event
 */
const postWasJustPublished = (event: AfterXXXEvent) => {
  if (event.result.publishedAt === null) {
    return false
  }

  const diff = timeDifference(new Date(event.result.updatedAt), new Date(event.result.publishedAt))
  console.log('timedifference = ', diff)
  if (diff <= MAX_TIME_DIFFERENCE_TO_RESOLVE_AS_JUST_PUBLISHED) {
    console.log('Post was just published!!!')
    return true
  }
}

const handlePostPublished = async (event: AfterXXXEvent) => {
  if (postWasJustPublished(event)) {
    await sendEmailsToSubscribersOnPostPublished(event)
  }
}

const validateTroops = async (event: AfterXXXEvent) => {
  console.log(event)
  const currentPost: Post = event.params.where?.id ? await strapi.entityService.findOne('api::post.post', event.params.where.id, {populate: ['troops']}) : {}
  console.log('currentPost', currentPost)
  const newPost: Post = {...currentPost, ...event.params.data}
  console.log('newPost', newPost)
  // if (newPost.attributes.troops === undefined || newPost.attributes.troops.target.length === 0) {
  //   throw new ForbiddenError('Vyberte oddíl(y)');
  // }
}

export default {
  async beforeUpdate(event: AfterXXXEvent) {
    // await validateTroops(event)
    const newPost: Post = event.params.data
    const currentPost: Post = await strapi.entityService.findOne('api::post.post', event.params.where.id, {populate: ['troops']})
    const mergedPost: Post = {...currentPost, ...newPost}
    const troops = mergedPost.troops as unknown as number[] | undefined

    if (troops === undefined || troops.length === 0) {
      throw new ForbiddenError('Nemůžete odebrat oddíly z příspěvku. Ponechte alespoň jeden.');
    }
  },

  async beforeCreate(event) {
    const newPost: Post = event.params.data
    const troops = newPost.troops as unknown as number[] | undefined
    console.log(troops)

    if (troops === undefined || troops.length === 0) {
      throw new ForbiddenError('Vyberte oddíl(y). Nelze vytvořit příspěvek bez žádného přiřazeného oddílu.');
    }
  },

  async afterCreate(event: AfterXXXEvent) {
    await handlePostPublished(event)
  },

  async afterUpdate(event) {
    await handlePostPublished(event)
  }

}
