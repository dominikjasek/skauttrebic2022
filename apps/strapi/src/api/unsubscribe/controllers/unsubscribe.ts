/**
 * A set of functions called "actions" for `unsubscribe`
 */

import unsubscribeService from './../services/unsubscribe';
import { Context } from 'koa';


export default {
  unsubscribe: async (ctx: Context) => {
    try {
      const token = ctx.request.body.token as string | null

      if (!token) {
        return ctx.throw(401, 'token is missing');
      }

      await unsubscribeService.unsubscribeFromPosts(token)

      ctx.response.status = 200
      ctx.send({ success: true })
    } catch (err) {
      ctx.body = err;
    }
  }
};
