const Sequelize = require('sequelize')
const dbConfig = require('../../../database')
const Client = require('../models/Client')
const Product = require('../models/Product')
const ShoppingCart = require('../models/ShoppingCart')
const Store = require('../models/store')

const connection = new Sequelize(dbConfig)

Client.init(connection)
Store.init(connection)
Product.init(connection)
ShoppingCart.init(connection)

module.exports = connection;