const express = require('express')


const ProductController = require('./src/controllers/ProductController');
const StoreController = require('./src/controllers/StoreController');
const ClientController = require('./src/controllers/ClientController');
const ShoppingCartController = require('./src/controllers/shoppingCartController');

const routes = express.Router();

routes.get('/products/list', ProductController.list); //funcionando

routes.get('/stores/list', StoreController.list);   //funcionando

routes.post('/clients/create', ClientController.creat); //funcionando

routes.get('/clients/list', ClientController.list); //funcionando

routes.get('/shoppingcarts/create', ShoppingCartController.creat);

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