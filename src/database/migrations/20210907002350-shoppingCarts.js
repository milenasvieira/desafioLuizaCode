'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('shoppingCarts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      clientId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {         // Client hasMany Products n:n
          model: 'clients',
          key: 'id'
        }
      },
      // isFinished: {
      //   type: Sequelize.BOOLEAN,
      //   default: false, //1 - Compra Realizada | 2 - Compra retirada
      // },
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
    return queryInterface.dropTable('shoppingCarts');
  }
};

//     shoppingCart.belongsToMany(products, {
//       through: cartProducts
//     })

//     products.belongsToMany(shoppingCart, {
//       through: cartProducts
//     })