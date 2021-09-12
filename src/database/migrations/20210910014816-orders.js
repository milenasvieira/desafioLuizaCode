'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      shoppingCartId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {         
          model: 'shoppingcarts',
          key: 'id'
        }
      },
      clientId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {         
          model: 'clients',
          key: 'id'
        }
      },
      storeId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'stores',
          key: 'id'
        }
      },
      orderStatus: {
        type: Sequelize.INTEGER,
        default: 1,   //1 - Compra Realizada | 2 - Compra retirada
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()')
      }
    });
  },
  
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('orders');
  }
};