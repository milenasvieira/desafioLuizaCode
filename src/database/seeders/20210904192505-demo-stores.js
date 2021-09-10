'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('stores', [{
      name: 'MaLu Fashion Store - Matriz',
      city: 'Franca'
    }, {
      name: 'MaLu Fashion Store - Filial 1',
      city: 'São Carlos'
    }, {
      name: 'MaLu Fashion Store - Filial 2',
      city: 'Salvador'
    }, {
      name: 'MaLu Fashion Store - Filial 3',
      city: 'Ouro Fino'
    }, {
      name: 'MaLu Fashion Store - Filial 4',
      city: 'Bragança Paulista'
    }])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('stores', null, {});
  }
};