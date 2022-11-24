'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BodyState extends Model {
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
  BodyState.init({
    id: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    steps: DataTypes.INTEGER,
    intensity: DataTypes.INTEGER,
    createTime: DataTypes.BIGINT,
  }, {
    sequelize,
    modelName: 'BodyState',
    tableName: 'body_state'
  });
  return BodyState;
};