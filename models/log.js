'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class log extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.log.belongsTo(models.food)
    }
  };
  log.init({
    meal: DataTypes.STRING,
    age: DataTypes.STRING,
    foodID: DataTypes.INTEGER,
    mood: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'log',
  });
  return log;
};