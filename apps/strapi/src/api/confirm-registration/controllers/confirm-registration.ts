/**
 * A set of functions called "actions" for `confirm-registration`
 */

export default {
  confirmRegistration: async (ctx, next) => {
    try {
      console.log('controller')
      ctx.body = 'ok';
    } catch (err) {
      ctx.body = err;
    }
  }
};
