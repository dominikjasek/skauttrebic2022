'use strict';

const { getAbsoluteAdminUrl } = require('@strapi/utils');

const initEmails = async (pluginStore) => {
  const value = await pluginStore.get({ key: 'email' }) || {};
  value.send_magic_link_invite = {
    display: 'Email.template.send_magic_link_invite',
    icon: 'magic',
    options: {
      from: {
        name: 'Skaut Třebíč',
        email: 'neodpovidat@skauttrebic.cz',
      },
      response_email: '',
      object: 'Pozvánka k administraci skautského webu',
      message: `<html>
<style>
  @charset "utf-8";
  /* CSS Document */
  @font-face {
    font-family: 'themix';
    src: url('https://cdn.skauting.cz/fonts/TheMix_LT_400.eot');
    src: url('https://cdn.skauting.cz/fonts/TheMix_LT_400.eot? #iefix') format('embedded-opentype');
    src: url('https://cdn.skauting.cz/fonts/TheMix_LT_400.woff') format('woff'),
    url('https://cdn.skauting.cz/fonts/TheMix_LT_400.woff2') format('woff2'),
    url('https://cdn.skauting.cz/fonts/TheMix_LT_400.otf') format('opentype'),
    url('https://cdn.skauting.cz/fonts/TheMix_LT_400.svg#themix') format('svg');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'themix';
    src: url('https://cdn.skauting.cz/fonts/TheMix_LT_400i.eot');
    src: url('https://cdn.skauting.cz/fonts/TheMix_LT_400i.eot? #iefix') format('embedded-opentype');
    src: url('https://cdn.skauting.cz/fonts/TheMix_LT_400i.woff') format('woff'),
    url('https://cdn.skauting.cz/fonts/TheMix_LT_400i.woff2') format('woff2'),
    url('https://cdn.skauting.cz/fonts/TheMix_LT_400i.otf') format('opentype'),
    url('https://cdn.skauting.cz/fonts/TheMix_LT_400i.svg#themix') format('svg');
    font-weight: 400;
    font-style: italic;
  }

  @font-face {
    font-family: 'themix';
    src: url('https://cdn.skauting.cz/fonts/TheMix_LT_700.eot');
    src: url('https://cdn.skauting.cz/fonts/TheMix_LT_700.eot? #iefix') format('embedded-opentype');
    src: url('https://cdn.skauting.cz/fonts/TheMix_LT_700.woff') format('woff'),
    url('https://cdn.skauting.cz/fonts/TheMix_LT_700.woff2') format('woff2'),
    url('https://cdn.skauting.cz/fonts/TheMix_LT_700.otf') format('opentype'),
    url('https://cdn.skauting.cz/fonts/TheMix_LT_700.svg#themix') format('svg');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'themix';
    src: url('https://cdn.skauting.cz/fonts/TheMix_LT_700i.eot');
    src: url('https://cdn.skauting.cz/fonts/TheMix_LT_700i.eot? #iefix') format('embedded-opentype');
    src: url('https://cdn.skauting.cz/fonts/TheMix_LT_700i.woff') format('woff'),
    url('https://cdn.skauting.cz/fonts/TheMix_LT_700i.woff2') format('woff2'),
    url('https://cdn.skauting.cz/fonts/TheMix_LT_700i.otf') format('opentype'),
    url('https://cdn.skauting.cz/fonts/TheMix_LT_700i.svg#themix') format('svg');
    font-weight: 700;
    font-style: italic;
  }

  @font-face {
    font-family: 'skautbold';
    src: url('https://cdn.skauting.cz/fonts/skaut-bold-webfont.eot');
    src: url('https://cdn.skauting.cz/fonts/skaut-bold-webfont.eot? #iefix') format('embedded-opentype');
    src: url('https://cdn.skauting.cz/fonts/skaut-bold-webfont.woff') format('woff'),
    url('https://cdn.skauting.cz/fonts/skaut-bold-webfont.woff2') format('woff2'),
    url('https://cdn.skauting.cz/fonts/skaut-bold-webfont.otf') format('opentype'),
    url('https://cdn.skauting.cz/fonts/skaut-bold-webfont.svg#skautbold') format('svg');
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: themix, sans-serif;
  }

  h1 {
    font-family: skautbold, sans-serif;
  }

  .join-btn-wrapper {
    text-align: center;
    margin: 30px 0px;
  }

  .join-btn {
    background-color: #294885;
    padding: 10px 50px;

    border-radius: 5px;
    text-decoration: none !important;
    color: white;
    text-transform: uppercase;
  }

</style>
<body>
<h2 class="title">Pozvánka k administraci skautského webu</h2>

<p>Administrátor skautského webu <a href="https://skauttrebic.cz">skauttrebic.cz</a> ti udělil oprávnění k administraci
  webu.</p>

<div class="join-btn-wrapper">
  <a class="join-btn" href="<%= URL %>">Připojit se
  </a>
</div>
<small>V případě potíží kontaktuj administrátora webu (Šíšu).</small>`,
    },
  }

  await pluginStore.set({ key: 'email', value });
};

module.exports = async ({ strapi }) => {
  const pluginStore = strapi.store({ type: 'plugin', name: 'users-permissions' });
  await initEmails(pluginStore);

  // bootstrap phase
  strapi.db.lifecycles.subscribe({
    models: ['admin::user'],

    async afterCreate({ result }) {
      const { registrationToken } = result;
      if (!registrationToken) return;

      const emailSettings = strapi.plugin('email').service('email').getProviderSettings();
      const defaultFrom = emailSettings?.settings?.defaultFrom  || 'Strapi <no-reply@strapi.io>';
      const defaultReplyTo = emailSettings?.settings?.defaultReplyTo || 'Strapi <no-reply@strapi.io>';
      const userPermissionService = strapi.plugin('users-permissions').service('users-permissions')
      const inviteLink = `${getAbsoluteAdminUrl(strapi.config)}/auth/register?registrationToken=${registrationToken}`;

      const settings = await pluginStore
        .get({ key: 'email' })
        .then((storeEmail) => storeEmail.send_magic_link_invite.options);

      settings.message = await userPermissionService.template(settings.message, {
        URL: inviteLink,
        USER: result,
      });

      strapi
        .plugin('email')
        .service('email')
        .send({
          to: result.email,
          from: defaultFrom,
          replyTo: defaultReplyTo,
          subject: settings.object,
          text: settings.message,
          html: settings.message,
        })
        .catch((err) => {
          strapi.log.error(err);
        });
    },
  });
};''
