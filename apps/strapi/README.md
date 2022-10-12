# 🚀 Strapi CMS

## Development

Start developing app with:
```
yarn build
yarn dev
```

## Create Super Admin user in production

Background: We don't want to allow each strapi user to create new user with arbitrary role. Otherwise he would be able to create super admin user. I wanted to achieve this using lifecycle hooks on `admin::user` model but this is not possible, since strapi supports lifecycles only for content-types models.

Therefore I hardcoded that:

To temporarilly enable creating Super Admin user, set `ALLOW_CREATE_SUPER_ADMIN_STRAPI_USER` to `1` in [render.yaml](./../../render.yaml). Then push, create new user in production. Don't forget to revert changes when you're done!

