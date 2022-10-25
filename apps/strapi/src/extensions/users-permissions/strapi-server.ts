'use strict';

module.exports = (plugin) => {
  const originalCreate = plugin.controllers.contentmanageruser.create

  plugin.controllers.contentmanageruser.create = async (ctx) => {
    ctx.request.body.username = ctx.request.body.email // we don't want to work with username, but strapi somehow requires this field required, therefore we set some value
    ctx.request.body.password = 'Abcd1234'
    await originalCreate(ctx)
  }

  return plugin
}
