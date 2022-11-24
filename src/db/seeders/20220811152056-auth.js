'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('auth', [
      {
        userId: 1,
        username: 'user1',
        password: '123456',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        userId: 2,
        username: 'user2',
        password: '654321',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('auth', null, {});
  }
};
