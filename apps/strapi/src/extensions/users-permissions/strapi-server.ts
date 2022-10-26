// eslint-disable-next-line @typescript-eslint/no-var-requires
const crypto = require('crypto')

import { AfterXXXEvent } from '../../api/post/content-types/post/interfaces';

module.exports = (plugin) => {
  console.log(plugin.controllers.auth.resetPassword)

  const originalCreate = plugin.controllers.contentmanageruser.create
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

        const hash = crypto.createHash('sha256').digest('hex').toString();
        console.log('hash', hash)

        // const result = await plugin.controllers.auth.resetPassword(user.id)
        // console.log('result', result)
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
