import auth from '@strapi/admin/server/services/auth';

export default {
  confirm: async (hash: string, id: string, newPassword: string) => {
    const hashPassword = await auth.hashPassword(newPassword);

    const user = await strapi.query('plugin::users-permissions.user').update({
      where: { resetPasswordToken: hash, id },
      data: { resetPasswordToken: null, password: hashPassword },
    });

    console.log('user', user)

    if (user===null) {
      throw new Error('Hash is not valid. It was probably already used.')
    }

    // return strapi.service('plugin::users-permissions.jwt').issue({
    //   id: user.id,
    // })
  },

  validate: async (id: string) => {
    const user = await strapi.entityService.findOne('plugin::users-permissions.user', id);
    return { isAllowedToSetPassword: user.resetPasswordToken !== null }
  }
};
