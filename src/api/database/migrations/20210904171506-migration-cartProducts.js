'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cartProducts', {
      value: {
        type: Sequelize.DOUBLE(18,2),
        allowNull: false
    }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('cartProducts');
  }
};
