'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
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
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'tb_user',
    }
  );
  return User;
};
