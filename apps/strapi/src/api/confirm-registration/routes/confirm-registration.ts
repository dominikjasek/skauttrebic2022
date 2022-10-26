module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/confirm-registration',
      handler: 'confirm-registration.confirmRegistration',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
