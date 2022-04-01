'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Person extends Model {
    static associate(models) {}
  }

  Person.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          notNull: false,
        },
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      login: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          notNull: false,
        },
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          notNull: false,
        },
      },
      birth: DataTypes.DATEONLY,
      type: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Person',
      tableName: 'tb_person',
    }
  );
  return Person;
};
