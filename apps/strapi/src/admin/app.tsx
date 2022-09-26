export default {
  config: {
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
        email: 'Email',
        password: 'Heslo',
        confirmed: 'Potvrzen',
        blocked: 'Blokován',
      },
    },
    tutorials: false,
    notifications: {release: false},
  },
  bootstrap(app) {
    console.log(app);
  },
};
