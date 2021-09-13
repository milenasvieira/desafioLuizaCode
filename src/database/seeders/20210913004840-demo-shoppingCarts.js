'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('shoppingCarts', [{
      clientId: 1,
      isFinished: true,
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('shoppingCarts', null, {});
  }
};
