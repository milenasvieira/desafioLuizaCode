'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('orders', [{
      shoppingCartId: 1,
      clientId: 1,
      storeId: 1,
      orderStatus: 1,
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('orders', null, {});
  }
};