// @ts-ignore
import RikitanLogoSvg from './extensions/rikitan_logo.svg'
// @ts-ignore
import RikitanLogoPng from './extensions/rikitan_logo.png'

export default {
  config: {
    menu: {
      logo: RikitanLogoSvg,
    },
    head: {
      favicon: RikitanLogoPng,
    },
    auth: {
      logo: RikitanLogoSvg,
    },
    theme: {
      colors: {
        alternative100: '#ecfcec',
        alternative200: '#F9B200',
        alternative500: '#F49E00',
        alternative600: '#3979B5',
        alternative700: '#294885',
        danger700: '#b72b1a'
      },
    },
    locales: ['cs', 'en'],
    translations: {
      cs: {
        // Custom translations
        title: 'Nadpis',
        content: 'Obsah',
        files: 'Soubory',
        type: 'Typ',
        images: 'Obrázky',
        text: 'Text',
        photo: 'Fotka',

        //User
        User: 'Uživatelé',
        username: 'Uživatelské jméno (přezdívka nebo celé jméno)',
        firstName: 'Jméno',
        lastName: 'Příjmení',
        email: 'Email',
        password: 'Heslo',
        confirmed: 'Potvrzen',
        blocked: 'Blokován',
        updatedAt: 'Aktualizováno',
        createdAt: 'Vytvořeno'
      },
    },
    tutorials: false,
    notifications: { release: false },
  },
  bootstrap(app) {
    console.log(app)
  },
};
