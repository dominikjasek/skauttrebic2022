# 🚀 Strapi CMS

## Development

Start developing app with:
```
yarn build
yarn dev
```

## Dumpnutí produkční databáze

https://github.com/dominikjasek/skauttrebic2022/blob/master/apps/strapi/production/dump-db.sh
Vytvoř si SSH klíč a napiš Dominikovi, přidá ho do Renderu a pak můžeš spustit tento skript.

## Config sync

K synchronizaci konfigurace mezi local a production prostředím se používá plugin [Strapi Config Sync](https://market.strapi.io/plugins/strapi-plugin-config-sync). 

Postup:
- Na localhostu proveď nějakou změnu v konfiguraci (např. přidej nový content-type)
- Přejdi na stránku Config syncu - http://localhost:1337/admin/settings/config-sync
- Klikni na tlačítko `Export`
- Změny se zaverzují do gitu
- Vytvoř PR, po approvu mergni a po deploy do produkce běž na https://api.skauttrebic.cz/admin/settings/config-sync
- Klikni na tlačítko `Import` a změny se aplikují

Mimochodem, tento plugin je trochu hacky, protože umožní vytvořit [více rolí](http://localhost:1337/admin/settings/roles) strapi uživatelů. Výchozí hodnota jsou [3](https://docs.strapi.io/user-docs/users-roles-permissions/configuring-administrator-roles#:~:text=a%20role).-,By%20default%2C%203%20administrator%20roles%20are%20defined%20for%20any%20Strapi%20application,-%3A)

## Vytvoření Super Admina v produkci

Background: We don't want to allow each strapi user to create new user with arbitrary role. Otherwise he would be able to create super admin user. I wanted to achieve this using lifecycle hooks on `admin::user` model but this is not possible, since strapi supports lifecycles only for content-types models.

Therefore I hardcoded that:

To temporarilly enable creating Super Admin user, set `ALLOW_CREATE_SUPER_ADMIN_STRAPI_USER` to `1` in [render.yaml](./../../render.yaml). Then push, create new user in production. Don't forget to revert changes when you're done!

## Deployment

Po pushi nového commitu (nebo merge PR) se aplikace automaticky deployne na [Render](https://dashboard.render.com/web/srv-cci6impa6gdiindmkeo0). Přístup má pouze Dominik, protože každý další uživatel by stál [19$/měsíc](https://render.com/pricing).
