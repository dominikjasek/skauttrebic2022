export default {
  routes: [
    {
      method: 'POST',
      path: '/unsubscribe',
      handler: 'unsubscribe.unsubscribe',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
