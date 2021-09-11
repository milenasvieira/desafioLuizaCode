'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cartProducts', {
      // id: {
      //   allowNull: false,
      //   autoIncrement: true,
      //   primaryKey: true,
      //   type: Sequelize.INTEGER
      // },
      shoppingCartId: {
        type: Sequelize.INTEGER,
        references: { model: 'shoppingCarts', key: 'id' },
        onDelete: 'CASCADE',
        allowNull: false,
        //primaryKey: true
      },
      productId: {
        type: Sequelize.INTEGER,
        references: { model: 'products', key: 'id' },
        onDelete: 'CASCADE',
        allowNull: false,
        //primaryKey: true
      },
      name: {
        type: Sequelize.STRING(150),
        allowNull: false,
      },
      value: {
        type: Sequelize.DOUBLE(18,2),
        allowNull: false,
    }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('cartProducts');
  }
};

