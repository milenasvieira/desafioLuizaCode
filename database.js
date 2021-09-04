const Sequelize = require('sequelize');
const sequelize = new Sequelize('luiza_code', 'ludevs', 'ludevs2021', {dialect: 'mysql', host: 'localhost'});
 
module.exports = sequelize;