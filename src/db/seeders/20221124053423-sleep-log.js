'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('sleep_log', [
      {
        userId: 1,
        dateOfSleep: 1668431040000,
        sleepStart: 1668467400000,
        sleepEnd: 1668431040000,
        aveSpO2: 99,
        aveHeartRate: 72,
        maxHeartRate: 81,
        remSleepDuration: 6480000,
        timeInBed: 28920000,
        sleepLevel: 'Well-Rested'
      },
      {
        userId: 1,
        dateOfSleep: 1668607740000,
        sleepStart: 1668607740000,
        sleepEnd: 1668640140000,
        aveSpO2: 99,
        aveHeartRate: 80,
        maxHeartRate: 89,
        remSleepDuration: 9720000,
        timeInBed: 32880000,
        sleepLevel: 'Tired'
      },
      {
        userId: 1,
        dateOfSleep: 1668707100000,
        sleepStart: 1668707100000,
        sleepEnd: 1670195580000,
        aveSpO2: 99,
        aveHeartRate: 72,
        maxHeartRate: 81,
        remSleepDuration: 6264000,
        timeInBed: 71760000,
        sleepLevel: 'Exhausted'
      },
      {
        userId: 1,
        dateOfSleep: 1670246040000,
        sleepStart: 1670246040000,
        sleepEnd: 1668813240000,
        aveSpO2: 98,
        aveHeartRate: 72,
        maxHeartRate: 81,
        remSleepDuration: 3960000,
        timeInBed: 24360000,
        sleepLevel: 'Well-Rested'
      },
      {
        userId: 1,
        dateOfSleep: 1668952260000,
        sleepStart: 1668952260000,
        sleepEnd: 1668988260000,
        aveSpO2: 95,
        aveHeartRate: 89,
        maxHeartRate: 87,
        remSleepDuration: 3960000,
        timeInBed: 28260000,
        sleepLevel: 'Well-Rested'
      },
      {
        userId: 1,
        dateOfSleep: 1669130520000,
        sleepStart: 1669130520000,
        sleepEnd: 1669072320000,
        aveSpO2: 93,
        aveHeartRate: 72,
        maxHeartRate: 81,
        remSleepDuration: 10800000,
        timeInBed: 32580000,
        sleepLevel: 'Well-Rested'
      },
      {
        userId: 1,
        dateOfSleep: 1669140780000,
        sleepStart: 1669140780000,
        sleepEnd: 1669227060000,
        aveSpO2: 99,
        aveHeartRate: 76,
        maxHeartRate: 85,
        remSleepDuration: 3965000,
        timeInBed: 20880000,
        sleepLevel: 'Exhausted'
      },
      {
        userId: 2,
        dateOfSleep: 1668387480000,
        sleepStart: 1668387480000,
        sleepEnd: 1668492000000,
        aveSpO2: 99,
        aveHeartRate: 80,
        maxHeartRate: 89,
        remSleepDuration: 10452000,
        timeInBed: 104520000,
        sleepLevel: 'Exhausted'
      },
      {
        userId: 2,
        dateOfSleep: 1668551820000,
        sleepStart: 1668551820000,
        sleepEnd: 1668584700000,
        aveSpO2: 99,
        aveHeartRate: 72,
        maxHeartRate: 81,
        remSleepDuration: 4932000,
        timeInBed: 35280000,
        sleepLevel: 'Well-Rested'
      },
      {
        userId: 2,
        dateOfSleep: 1668600240000,
        sleepStart: 1668600240000,
        sleepEnd: 1668664800000,
        aveSpO2: 98,
        aveHeartRate: 72,
        maxHeartRate: 85,
        remSleepDuration: 9684000,
        timeInBed: 69660000,
        sleepLevel: 'Tired'
      },
      {
        userId: 2,
        dateOfSleep: 1668733860000,
        sleepStart: 1668733860000,
        sleepEnd: 1668753060000,
        aveSpO2: 96,
        aveHeartRate: 78,
        maxHeartRate: 84,
        remSleepDuration: 2880000,
        timeInBed: 26900000,
        sleepLevel: 'Exhausted'
      },
      {
        userId: 2,
        dateOfSleep: 1668824100000,
        sleepStart: 1668824100000,
        sleepEnd: 1668924900000,
        aveSpO2: 95,
        aveHeartRate: 80,
        maxHeartRate: 89,
        remSleepDuration: 5880000,
        timeInBed: 107800000,
        sleepLevel: 'Exhausted'
      },
      {
        userId: 2,
        dateOfSleep: 1668981060000,
        sleepStart: 1668981060000,
        sleepEnd: 1669011660000,
        aveSpO2: 94,
        aveHeartRate: 90,
        maxHeartRate: 99,
        remSleepDuration: 4590000,
        timeInBed: 33200000,
        sleepLevel: 'Well - Rested'
      },
      {
        userId: 2,
        dateOfSleep: 1669074660000,
        sleepStart: 1669074660000,
        sleepEnd: 1669098180000,
        aveSpO2: 93,
        aveHeartRate: 91,
        maxHeartRate: 100,
        remSleepDuration: 8528000,
        timeInBed: 25620000,
        sleepLevel: 'Well - Rested'
      },
      {
        userId: 2,
        dateOfSleep: 1669162140000,
        sleepStart: 1669162140000,
        sleepEnd: 1669276800000,
        aveSpO2: 99,
        aveHeartRate: 85,
        maxHeartRate: 94,
        remSleepDuration: 8528000,
        timeInBed: 25620000,
        sleepLevel: 'Tired'
      },
      {
        userId: 2,
        dateOfSleep: 1669162140000,
        sleepStart: 1669162140000,
        sleepEnd: 1669276800000,
        aveSpO2: 99,
        aveHeartRate: 85,
        maxHeartRate: 94,
        remSleepDuration: 17117000,
        timeInBed: 117760000,
        sleepLevel: 'Tired'
      },
      {
        userId: 2,
        dateOfSleep: 1669157820000,
        sleepStart: 1669157820000,
        sleepEnd: 1669363200000,
        aveSpO2: 93,
        aveHeartRate: 91,
        maxHeartRate: 100,
        remSleepDuration: 8080700,
        timeInBed: 207480000,
        sleepLevel: 'Well-Rested'
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
    await queryInterface.bulkDelete('sleep_log', null, {});
  }
};
