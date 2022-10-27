import confirmRegistrationService from './../services/confirm-registration';
import { Context } from 'koa';

/**
 * A set of functions called "actions" for `confirm-registration`
 */
export default {
  confirmRegistration: async (ctx: Context) => {
    try {
      const hash = ctx.request.body.hash as string | null
      const password = ctx.request.body.password as string | null

      if (!hash) {
        return ctx.throw(401, 'hash is missing');
      }
      if (!password) {
        return ctx.throw(401, 'password is missing');
      }

      await confirmRegistrationService.confirm(hash as string, password as string)
      ctx.response.status = 200
      ctx.send({ success:true })
    } catch (err) {
      ctx.status = 400;
      ctx.body = {
        message: err.message
      };
    }
  },
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
