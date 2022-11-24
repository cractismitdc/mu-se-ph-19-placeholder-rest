'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert('body-state', [
      {
        userId: 1,
        steps: 8851,
        intensity: 1,
        createTime: 1668431040000
      },
      {
        userId: 2,
        steps: 18611,
        intensity: 4,
        createTime: 1668431040000
      },
      {
        userId: 3,
        steps: 14660,
        intensity: 3,
        createTime: 1668431040000
      },
      {
        userId: 1,
        steps: 8851,
        intensity: 1,
        createTime: 1668607740000
      },
      {
        userId: 2,
        steps: 18611,
        intensity: 4,
        createTime: 1668607740000
      },
      {
        userId: 3,
        steps: 14660,
        intensity: 3,
        createTime: 1668607740000
      },
      {
        userId: 1,
        steps: 8851,
        intensity: 1,
        createTime: 1668707100000
      },
      {
        userId: 2,
        steps: 18611,
        intensity: 4,
        createTime: 1668707100000
      },
      {
        userId: 3,
        steps: 14660,
        intensity: 3,
        createTime: 1668707100000
      },
      {
        userId: 1,
        steps: 8851,
        intensity: 1,
        createTime: 1670246040000
      },
      {
        userId: 2,
        steps: 18611,
        intensity: 4,
        createTime: 1670246040000
      },
      {
        userId: 3,
        steps: 14660,
        intensity: 3,
        createTime: 1670246040000
      },
      {
        userId: 1,
        steps: 8851,
        intensity: 1,
        createTime: 1668952260000
      },
      {
        userId: 2,
        steps: 18611,
        intensity: 4,
        createTime: 1668952260000
      },
      {
        userId: 3,
        steps: 14660,
        intensity: 3,
        createTime: 1668952260000
      },
      {
        userId: 1,
        steps: 8851,
        intensity: 1,
        createTime: 1669130520000
      },
      {
        userId: 2,
        steps: 18611,
        intensity: 4,
        createTime: 1669130520000
      },
      {
        userId: 3,
        steps: 14660,
        intensity: 3,
        createTime: 1669130520000
      },
      {
        userId: 1,
        steps: 8851,
        intensity: 1,
        createTime: 1669140780000
      },
      {
        userId: 2,
        steps: 18611,
        intensity: 4,
        createTime: 1669140780000
      },
      {
        userId: 3,
        steps: 14660,
        intensity: 3,
        createTime: 1669140780000
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
