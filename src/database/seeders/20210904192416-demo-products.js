'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.bulkInsert('products', [{
     name: 'Perfume',
     value: 150.00
   }, {
    name: 'Camiseta',
    value: 50.00
   }, {
    name: 'Tênis',
    value: 200.00
   }, {
    name: 'Calça jeans',
    value: 80.00
   }])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('products', null, {});
  }
};
