'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('shoppingCarts', [{
      clientId: 1,
      isFinished: false,
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('shoppingCarts', null, {});
  }
};
