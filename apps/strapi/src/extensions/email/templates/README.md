### How it works

I am using plugin `strapi-plugin-email-designer`. It is not very clever to use config-sync to synchronize email templates between development and production environment, because we want to allowe strapi user to customize these template if they wanted to.

If I made some changes on localhost in email-designer, I export it locally and import in in production server.

For versioning needs, I version these exports inside this directory.
