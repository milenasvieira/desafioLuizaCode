'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('shoppingCart', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    shoppingDate: {
        type: Sequelize.DATE
    },
    status: { //retirado, realizado, aberto
        type: Sequelize.STRING(20),
        allowNull: false,
    },
    createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
    }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('shoppingCart');
  }
};
