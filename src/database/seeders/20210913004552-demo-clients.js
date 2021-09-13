'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('clients', [{
      name: 'Milena Vieira'
    }, {
      name: 'Jade Ohara'
    }, {
      name: 'Michele Oliveira'
    }, {
      name: 'Patrícia Souza'
    }, {
      name: 'Vitória Santos'
    }])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('clients', null, {});
  }
};
