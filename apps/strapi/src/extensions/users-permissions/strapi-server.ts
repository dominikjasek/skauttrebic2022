'use strict';

module.exports = (plugin) => {
  // const originalCreate = plugin.controllers.contentmanageruser.create
  //
  // plugin.controllers.contentmanageruser.create = async (ctx) => {
  //   ctx.request.body.username = ctx.request.body.email // we don't want to work with username, but strapi somehow requires this field required, therefore we set some value
  //   ctx.request.body.password = 'Abcd1234'
  //   await originalCreate(ctx)
  // }
  //
  // console.log(plugin)
  //
  //
  // plugin.bootstrap = async ({ strapi }) => {
  //   strapi.db.lifecycles.subscribe({
  //     models: ['plugin::users-permissions.user'],
  //     async afterCreate(event) {
  //       // Send email to user with reset password
  //       console.log(event.params)
  //     },
  //
  //     afterCount(): void {return},
  //     afterCreateMany(): void {return},
  //     afterDelete(): void {return},
  //     afterDeleteMany(): void {return},
  //     afterFindMany(): void {return},
  //     afterFindOne(): void {return},
  //     afterUpdate(): void {return},
  //     afterUpdateMany(): void {return},
  //     beforeCount(): void {return},
  //     beforeCreate(): void {return},
  //     beforeCreateMany(): void {return},
  //     beforeDelete(): void {return},
  //     beforeDeleteMany(): void {return},
  //     beforeFindMany(): void {return},
  //     beforeFindOne(): void {return},
  //     beforeUpdate(): void {return},
  //     beforeUpdateMany(): void {return}
  //   });
  // }

  return plugin
}
