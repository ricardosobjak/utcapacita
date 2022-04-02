'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'tb_user',
      [
        {
          name: 'Administrador',
          email: 'adm@adm.com',
          login: 'admin',
          password: '1234',
          createdAt: '2020-09-29 07:00:00',
          updatedAt: '2020-09-29 08:00:00',
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('User', null, {});
  },
};
