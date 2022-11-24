'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('users', [
        {
            firstName: 'John',
            lastName: 'Doe',
            address: 'Makati City',
            postalCode: '1234',
            phone: '09123456789',
            email: 'user1@email.com',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        },
        {
            firstName: 'Juan',
            lastName: 'Dela Cruz',
            address: 'Makati City',
            postalCode: '1234',
            phone: '09123456789',
            email: 'user2@email.com',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        },
    ], {});
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('users', null, {});
  }
};
