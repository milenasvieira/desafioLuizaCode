const Sequelize = require('sequelize');
const database = require('../database');

const products = database.define('products', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING(150),
        allowNull: false
    },
    value: {
        type: Sequelize.DOUBLE(18,2),
        allowNull: false
    }
})
 
module.exports = products;