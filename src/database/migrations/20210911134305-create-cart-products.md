// 'use strict';
// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     await queryInterface.createTable('CartProducts', {
//       id: {
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//         type: Sequelize.INTEGER
//       },
//       id: {
//         type: Sequelize.UUID
//       },
//       shoppingCartId: {
//         type: Sequelize.UUID
//       },
//       productId: {
//         type: Sequelize.UUID
//       },
//       name: {
//         type: Sequelize.STRING
//       },
//       value: {
//         type: Sequelize.DOUBLE
//       },
//       createdAt: {
//         allowNull: false,
//         type: Sequelize.DATE
//       },
//       updatedAt: {
//         allowNull: false,
//         type: Sequelize.DATE
//       }
//     });
//   },
//   down: async (queryInterface, Sequelize) => {
//     await queryInterface.dropTable('CartProducts');
//   }
// };