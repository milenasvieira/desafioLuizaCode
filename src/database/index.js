const Sequelize = require('sequelize');
const dbConfig = require('../services/database');

const Client = require('../models/Client');
const Product = require('../models/Product');
const ShoppingCart = require('../models/ShoppingCart');
const Store = require('../models/Store');


const connection = new Sequelize(dbConfig);

Client.init(connection);
Product.init(connection);
ShoppingCart.init(connection);
Store.init(connection);

Client.associate(connection.models);
Product.associate(connection.models);
ShoppingCart.associate(connection.models);
Store.associate(connection.models);


module.exports = connection;