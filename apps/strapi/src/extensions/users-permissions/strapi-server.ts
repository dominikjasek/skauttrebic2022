
import { sendEmailToNewUser } from '../email/use-cases/sendEmailToNewUser';

const crypto = require('crypto')
const { ForbiddenError } = require('@strapi/utils').errors;

import { AfterXXXEvent } from '../../api/post/content-types/post/interfaces';

module.exports = (plugin) => {
  const originalCreate = plugin.controllers.contentmanageruser.create
  plugin.controllers.contentmanageruser.create = async (ctx) => {
    if(ctx.request.body.subscribing_troops === undefined || ctx.request.body.subscribing_troops.length === 0) {
      throw new ForbiddenError('Uživatel musí mít přirazený nějaký oddíl')
    }

    ctx.request.body.username = ctx.request.body.email // we don't want to work with username, but strapi somehow requires this field required, therefore we set some value
    ctx.request.body.password = 'Abcd1234'

    if (ctx.request.body.lastName === undefined) {
      ctx.request.body.lastName = ctx.request.body.nickName ?? ''
    }

    await originalCreate(ctx)
  }

  const originalCallback = plugin.controllers.auth.callback;
  plugin.controllers.auth.callback = async (ctx) => {
    // Execute the standard login logic
    await originalCallback(ctx);

    // If login failed or no user returned, do nothing
    if (!ctx.body || !ctx.body.user) return;

    // Fetch the user again with the role populated
    const userWithRole = await strapi.entityService.findOne(
      'plugin::users-permissions.user',
      ctx.body.user.id,
      { populate: { role: { fields: ['type'] } } }
    );

    // Attach the role to the existing response body
    ctx.body.user.role = userWithRole.role;
  };

  const originalBootstrap = plugin.bootstrap
  plugin.bootstrap = async ({ strapi }) => {
    strapi.db.lifecycles.subscribe({
      models: ['plugin::users-permissions.user'],
      async afterCreate(event: AfterXXXEvent) {
        // Send email to user with reset password
        const confirmRegistrationHash = crypto.createHash('sha256').update(event.result.id.toString()).digest('hex').toString();
        const unsubscribeHash = crypto.createHash('sha256').update(event.result.id.toString()).digest('hex').toString();

        const user = await strapi.entityService.update('plugin::users-permissions.user', event.result.id, {
          data: {
            resetPasswordToken: confirmRegistrationHash,
            unsubscribeToken: unsubscribeHash
          }
        })

        const registrationLink = `${process.env.FRONTEND_URL}/potvrzeni-registrace?hash=${confirmRegistrationHash}&id=${user.id}&email=${user.email}&firstName=${user.firstName}&lastName=${user.lastName}`
        await sendEmailToNewUser({ to: user.email, link: registrationLink })
      },
      afterCount(): void {return},
      afterCreateMany(): void {return},
      afterDelete(): void {return},
      afterDeleteMany(): void {return},
      afterFindMany(): void {return},
      afterFindOne(): void {return},
      afterUpdate(): void {return},
      afterUpdateMany(): void {return},
      beforeCount(): void {return},
      beforeCreate(): void {return},
      beforeCreateMany(): void {return},
      beforeDelete(): void {return},
      beforeDeleteMany(): void {return},
      beforeFindMany(): void {return},
      beforeFindOne(): void {return},
      beforeUpdate(): void {return},
      beforeUpdateMany(): void {return}
    });

    await originalBootstrap({ strapi })
  }

  return plugin
}
