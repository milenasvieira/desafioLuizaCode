const Sequelize = require('sequelize');
const database = require('../database');
const products = require('./products');
const shoppingCart = require('./shoppingCarts');

const cartProducts = database.define('cartProducts', {
    value: {
        type: Sequelize.DOUBLE(18,2),
        allowNull: false
    }
})

shoppingCart.belongsToMany(products, {
    through: cartProducts
})

products.belongsToMany(shoppingCart, {
    through: cartProducts
})

module.exports = cartProducts;
  