const Sequelize = require('sequelize');
const database = require('../database');

const store = database.define('store', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    city: {
        type: Sequelize.STRING(50),
        allowNull: false
    }
})
 
module.exports = store;