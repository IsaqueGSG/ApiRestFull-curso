'use strict';

const bcrypt = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('users', [
      {
        nome: 'Isaque',
        email: 'isaque@gmail.com',
        password_hash: await bcrypt.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Isaque2',
        email: 'isaque2@gmail.com',
        password_hash: await bcrypt.hash('111111', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Isaque3',
        email: 'isaque3@gmail.com',
        password_hash: await bcrypt.hash('222222', 8),
        created_at: new Date(),
        updated_at: new Date(),
      }
    ],
    {}
    );

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
