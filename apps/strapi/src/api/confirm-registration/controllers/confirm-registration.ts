import confirmRegistrationService from './../services/confirm-registration';
import { Context } from 'koa';

/**
 * A set of functions called "actions" for `confirm-registration`
 */
export default {
  validate: async (ctx: Context) => {
    try {
      const userId = ctx.params.id as string | null
      if (!userId) {
        return ctx.throw(401, 'id is missing');
      }
      const result = await confirmRegistrationService.validate(userId)
      ctx.send(result)
    }
    catch (err) {
      ctx.body = {
        message: err.message
      };
    }
  }
};
