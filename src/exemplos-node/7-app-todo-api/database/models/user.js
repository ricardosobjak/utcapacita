'use strict';
const bcrypt = require('bcryptjs');
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    /**
     * Validar a senha do Usuário
     * @param {string} password 
     */
    /*
    validPassword(password) {
      console.log(password);
      console.log(this.password);
      console.log(bcrypt.hashSync(password, 10));

      bcrypt.compareSync(password, this.password);
    }
    */


    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.ToDo, {
        foreignKey: 'userId',
        as: 'todos',
      });
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
      birth: DataTypes.DATEONLY,
      login: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          notNull: false,
        },
      },
      password: {
        type: DataTypes.TEXT,
        validate: {
          notNull: false,
        },
      },
      type: {
        type: DataTypes.STRING
      },
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
      modelName: 'User',
      tableName: 'tb_user'
    }
  );

  User.prototype.validPassword = function (password) {
    console.log(password);
    console.log(this.password);
    return bcrypt.compareSync(password, this.password);
  }

  return User;
};
