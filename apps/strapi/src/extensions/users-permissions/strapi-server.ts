'use strict';

import { AfterXXXEvent } from '../../api/post/content-types/post/interfaces';

module.exports = (plugin) => {
  const originalCreate = plugin.controllers.contentmanageruser.create
  console.log(plugin)
  plugin.controllers.contentmanageruser.create = async (ctx) => {
    ctx.request.body.username = ctx.request.body.email // we don't want to work with username, but strapi somehow requires this field required, therefore we set some value
    ctx.request.body.password = 'Abcd1234'
    await originalCreate(ctx)
  }

  const originalBootstrap = plugin.bootstrap
  plugin.bootstrap = async ({ strapi }) => {
    strapi.db.lifecycles.subscribe({
      models: ['plugin::users-permissions.user'],
      async afterCreate(event: AfterXXXEvent) {
        // Send email to user with reset password
        console.log('result', event.result)
        const user = await strapi.entityService.findOne('plugin::users-permissions.user', event.result.id)
        console.log(user)
        //
        // console.log(event.params.data.email)
        // console.log(`email: ${event.params.data.email}`)
        // await sendEmailToNewUser()
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
