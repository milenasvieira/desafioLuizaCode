'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('orderProducts', [{
      orderId: 1,
      productId: 2,
      name: "Camiseta",
      value: 50.00,
     }]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('orderProducts', null, {});
  }
};