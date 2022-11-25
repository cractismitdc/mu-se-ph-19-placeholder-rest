"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "sleep_log",
      [
        {
          userId: 1,
          dateOfSleep: 1668431040000,
          sleepStart: 1668467400000,
          sleepEnd: 1668431040000,
          aveSp02: 99,
          aveHeartRate: 72,
          maxHeartRate: 81,
          remSleepDuration: 7920000,
          timeInBed: 36000000,
          sleepLevel: 'Well-Rested'
        },
        {
          userId: 1,
          dateOfSleep: 1668607740000,
          sleepStart: 1668607740000,
          sleepEnd: 1668640140000,
          aveSp02: 99,
          aveHeartRate: 80,
          maxHeartRate: 89,
          remSleepDuration: 6336000,
          timeInBed: 1668608460000,
          sleepLevel: 'Tired'
        },
        {
          userId: 1,
          dateOfSleep: 1668707100000,
          sleepStart: 1668707100000,
          sleepEnd: 1670195580000,
          aveSp02: 99,
          aveHeartRate: 72,
          maxHeartRate: 81,
          remSleepDuration: 1.76,
          timeInBed: 1668707100000,
          sleepLevel: 'Exhausted'
        },
        {
          userId: 1,
          dateOfSleep: 1670246040000,
          sleepStart: 1670246040000,
          sleepEnd: 1668813240000,
          aveSp02: 98,
          aveHeartRate: 72,
          maxHeartRate: 81,
          remSleepDuration: 1.98,
          timeInBed: 1668777300000,
          sleepLevel: 'Well-Rested'
        },
        {
          userId: 1,
          dateOfSleep: 1668952260000,
          sleepStart: 1668952260000,
          sleepEnd: 1668988260000,
          aveSp02: 95,
          aveHeartRate: 89,
          maxHeartRate: 87,
          remSleepDuration: 2.2,
          timeInBed: 1668952260000,
          sleepLevel: 'Well-Rested'
        },
        {
          userId: 1,
          dateOfSleep: 1669130520000,
          sleepStart: 1669130520000,
          sleepEnd: 1669072320000,
          aveSp02: 93,
          aveHeartRate: 72,
          maxHeartRate: 81,
          remSleepDuration: 1.76,
          timeInBed: 1669129860000,
          sleepLevel: 'Well-Rested'
        },
        {
          userId: 1,
          dateOfSleep: 1669140780000,
          sleepStart: 1669140780000,
          sleepEnd: 1669227060000,
          aveSp02: 99,
          aveHeartRate: 76,
          maxHeartRate: 85,
          remSleepDuration: 1.1,
          timeInBed: 1669226760000,
          sleepLevel: 'Exhausted'
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('sleep_log', null, {});
  }
};
