'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cartProducts', {
      productId: {
        type: Sequelize.INTEGER,
        references: { model: 'products', key: 'id' },
        onDelete: 'CASCADE',
        allowNull: false,
        primaryKey: true
      },
      shoppingCartId: {
        type: Sequelize.INTEGER,
        references: { model: 'shoppingCarts', key: 'id' },
        onDelete: 'CASCADE',
        allowNull: false,
        primaryKey: true
      },
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

