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
    await queryInterface.createTable('sleep_log', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      dateOfSleep: {
        allowNull: false,
        type: Sequelize.BIGINT
      },
      sleepstart: {
        allowNull: false,
        type: Sequelize.BIGINT
      },
      sleepEnd: {
        allowNull: false,
        type: Sequelize.BIGINT
      },
      aveSp02: {
        allowNull: false,
        type: Sequelize.SMALLINT
      },
      aveHeartRate: {
        allowNull: false,
        type: Sequelize.SMALLINT
      },
      maxHeartRate: {
        allowNull: false,
        type: Sequelize.SMALLINT
      },
      remSleepDuration: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      sleepLevel: {
        allowNull: false,
        type: Sequelize.STRING
      },
      timeInBed: {
        allowNull: false,
        type: Sequelize.BIGINT
      }
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('sleep_log')
  }
};
