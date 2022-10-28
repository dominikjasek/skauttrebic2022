module.exports = {
  routes: [
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
