'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SleepLog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, { foreignKey: 'userId' })
    }
  }
  SleepLog.init({
    id: {
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: DataTypes.INTEGER,
    dateOfSleep: DataTypes.BIGINT,
    sleepStart: DataTypes.BIGINT,
    sleepEnd: DataTypes.BIGINT,
    aveSpO2: DataTypes.SMALLINT,
    aveHeartRate: DataTypes.SMALLINT,
    maxHeartRate: DataTypes.SMALLINT,
    remSleepDuration: DataTypes.NUMERIC,
    sleepLevel: DataTypes.STRING,
    timeInBed: DataTypes.BIGINT,
  }, {
    sequelize,
    modelName: 'SleepLog',
    tableName: 'sleep_log'
  });
  return SleepLog;
};