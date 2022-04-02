'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  /**
   * Definição da classe de modelo ToDo.
   */
  class ToDo extends Model {
    /**
     * Método para definir as associações entre os modelos.
     * @param {*} models 
     */
    static associate(models) {

      /**
       *  Associação de "pertence à" entre ToDo e User
       */
      ToDo.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',
      });
    }
  }

  /**
   * Depois de definir o modelo, é preciso inicializá-lo.
   * Este processo de inicialização visa definir os atributos e seus metadados.
   */
  ToDo.init(
    {
      title: {
        type: DataTypes.STRING,
        validate: {
          notNull: false,
        },
      },
      description: {
        type: DataTypes.STRING
      },
      date: DataTypes.DATE,
      done: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
        validate: {
          notNull: false,
        }
      },
      userId: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'ToDo',
      tableName: 'tb_todo'
    }
  );

  return ToDo;
};