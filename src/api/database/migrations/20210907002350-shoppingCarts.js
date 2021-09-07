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
      productId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {         // products hasMany Clients n:n
          model: 'products',
          key: 'id'
        }
      },
      storeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {         // store hasMany Products n:n
          model: 'stores',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
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