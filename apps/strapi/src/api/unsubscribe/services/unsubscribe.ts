/**
 * unsubscribe service
 */

export default {
  unsubscribeFromPosts: async (token: string) => {
    const user = await strapi.query('plugin::users-permissions.user').update({
      where: { unsubscribeToken: token },
      data: {
        subscribing_troops: []
      },
    });

    console.log('user', user)

    return
  }
};
