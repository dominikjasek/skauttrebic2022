module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/confirm-registration',
      handler: 'confirm-registration.confirmRegistration',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/validate-confirm-registration/:id',
      handler: 'confirm-registration.validate',
      config: {
        policies: [],
        middlewares: [],
      },
    }
  ],
};
