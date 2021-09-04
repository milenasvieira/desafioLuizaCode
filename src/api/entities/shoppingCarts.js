const Sequelize = require('sequelize');
const database = require('../database');
const clients = require('./clients');

const shoppingCart = database.define('shoppingCart', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    //client.id
    shoppingDate: {
        type: Sequelize.DATE
    },
    //store.id
    status: { //retirado, realizado, aberto
        type: Sequelize.STRING(20),
        allowNull: false,
    },
    createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
    }
})
 
module.exports = shoppingCart;