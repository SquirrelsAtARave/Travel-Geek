const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Itinerary extends Model {}

Itinerary.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      destination: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      airline: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      flight: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      activities: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
   
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'itinerary',
  }
);

module.exports = Itinerary;