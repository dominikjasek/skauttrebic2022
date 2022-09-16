#!/bin/sh

#This requires you to add ssh public key to render (https://render.com/docs/ssh-keys)

mkdir -p db-dumps
scp srv-cci6impa6gdiindmkeo0@ssh.frankfurt.render.com:/opt/render/project/src/apps/strapi/data/strapi.db ./db-dumps/strapi-db-"$(date +%d-%m-%Y_%H:%M)".db
