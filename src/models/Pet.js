const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Pet extends Model {}

Pet.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    pet_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pet_gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birth_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    pet_weight: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    next_appointment: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    owner_id: {
      references: {
        type: DataTypes.INTEGER,
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    // do we need the hooks here?
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.email = await newUserData.email.toLowerCase();
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.email = await updatedUserData.email.toLowerCase();
        return updatedUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'pet',
  }
);

module.exports = Pet;