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
    await queryInterface.bulkInsert('tips', [
      {
        sleepCode: 1,
        sleepQuality: 'Well-Rested',
        message:
          'Being consistent assist in maintaining a good sleep schedule. Going to bed at the same time each night would help.'
      },
      {
        sleepCode: 1,
        sleepQuality: 'Well-Rested',
        message: 'Being well-rested lowers your risk for serious health problems, like diabetes and heart disease'
      },
      {
        sleepCode: 1,
        sleepQuality: 'Well-Rested',
        message: 'Getting enough sleep reduces stress and improves your mood'
      },
      {
        sleepCode: 3,
        sleepQuality: 'Exhausted',
        message: 'Before sleeping, make sure your bedroom is quiet, dark, relaxing, and at a comfortable temperature'
      },
      {
        sleepCode: 2,
        sleepQuality: 'Exhausted',
        message: 'Avoid large meals, caffeine, and alcohol before bedtime'
      },
      {
        sleepCode: 2,
        sleepQuality: 'Exhausted',
        message:
          'Get some exercise. Being physically active during the day can help you fall asleep more easily at night.'
      },
      {
        sleepCode: 2,
        sleepQuality: 'Exhausted',
        message: 'Create a comfortable sleep environment — make sure your bedroom is dark and quiet'
      },
      {
        sleepCode: 2,
        sleepQuality: 'Exhausted',
        message:
          'Lack of quality sleep are associated with high-blood pressure and heart related problems like heart attacks and strokes'
      },
      {
        sleepCode: 2,
        sleepQuality: 'Exhausted',
        message:
          'Sleep disorders can cause many different problems.Keep in mind that it’s normal to have trouble sleeping every now and then.If you are consistently having troubles, you can consult your doctor'
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
