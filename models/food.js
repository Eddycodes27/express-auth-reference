'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class food extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.food.belongsTo(models.user)

      models.food.hasMany(models.log)
    }
  };
  food.init({
    meal: DataTypes.STRING,
    age: DataTypes.STRING,
    foodID: DataTypes.INTEGER,
    mood: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'food',
  });
  return food;
};