#!/bin/sh

#This requires you to add ssh public key to render (https://render.com/docs/ssh-keys)

scp ./db-dumps/strapi-db-replace-with-your-date.db srv-cci6impa6gdiindmkeo0@ssh.frankfurt.render.com:/data/strapi.db
