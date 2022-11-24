'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.sequelize.transaction( t => {
      return Promise.all([
        queryInterface.addColumn('users', 'age', {
          type: Sequelize.INTEGER
        }, {transaction: t}),
        queryInterface.addColumn('users', 'registrationDate', {
          type: Sequelize.DATEONLY
        }, {transaction: t})
      ])
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.sequelize.transaction( t => {
      return Promise.all([
        queryInterface.removeColumn('users', 'age', {transaction: t}),
        queryInterface.removeColumn('users', 'registrationDate', {transaction: t})
      ])
    })
  }
};
