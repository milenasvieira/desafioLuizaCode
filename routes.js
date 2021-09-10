const express = require('express')


const ProductController = require('./src/controllers/ProductController');
const StoreController = require('./src/controllers/StoreController');
const ClientController = require('./src/controllers/ClientController');
const ShoppingCartController = require('./src/controllers/shoppingCartController');

const routes = express.Router();

routes.get('/products/list', ProductController.list);

routes.get('/stores/list', StoreController.list);

routes.post('/clients/create', ClientController.store);

routes.get('/clients/list', ClientController.list);

// routes.get('/shoppingcarts/create', ShoppingCartController.create);

// routes.get('/shoppingcarts/delete', ShoppingCartController.delete);

// routes.get('/shoppingcarts/checkout', ShoppingCartController.checkout);

// routes.get('/shoppingcarts/list', ShoppingCartController.list);



// routes.get('/users/:user_id/addresses', AddressController.index);
// routes.post('/users/:user_id/addresses', AddressController.store);

// routes.get('/users/:user_id/techs', TechController.index);
// routes.post('/users/:user_id/techs', TechController.store);
// routes.delete('/users/:user_id/techs', TechController.delete);

// routes.get('/report', ReportController.show);

module.exports = routes;