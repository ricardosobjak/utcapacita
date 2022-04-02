'use strict';
const bcrypt = require('bcryptjs');
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
      hooks: {
        beforeUpdate: (user) => {
          const salt = bcrypt.genSaltSync();
          user.password = bcrypt.hashSync(user.password, salt)
        },
        beforeCreate: (user) => {
          const salt = bcrypt.genSaltSync();
          user.password = bcrypt.hashSync(user.password, salt);
        },
      },
      instanceMethods: {
        validPassword: function (password) {
          return bcrypt.compareSync(password, this.password);
        }
      },
      sequelize,
      modelName: 'Person',
      tableName: 'tb_person'
    }
  );

  Person.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  }

  return Person;
};
