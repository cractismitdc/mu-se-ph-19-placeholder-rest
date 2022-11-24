'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('users', [
        {
            firstName: 'John',
            lastName: 'Doe',
            age: 28,
            registrationDate: new Date().toISOString(),
        },
        {
            firstName: 'Juan',
            lastName: 'Dela Cruz',
            age: 26,
            registrationDate: new Date().toISOString(),
        },
    ], {});
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('users', null, {});
  }
};
