const Sequelize = require('sequelize')
require('../services/database')
const Client = require('../models/Client')
const Product = require('../models/Product')
const ShoppingCart = require('../models/ShoppingCart')
const Store = require('../models/Store')
const connection = require('../services/database')

console.log('configurando db')

Client.init(connection)
Store.init(connection)
Product.init(connection)
ShoppingCart.init(connection)

// Client.init(connection.Sequelize)
// Store.init(connection.Sequelize)
// Product.init(connection.Sequelize)
// ShoppingCart.init(connection.Sequelize)

Client.associate(connection.models)
Store.associate(connection.models)
Product.associate(connection.models)
ShoppingCart.associate(connection.models)

console.log('dbconfigurado')

module.exports = connection;