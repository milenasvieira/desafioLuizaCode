const express = require('express')


const ProductController = require('./src/controllers/ProductController');
const StoreController = require('./src/controllers/StoreController');
const ClientController = require('./src/controllers/ClientController');
const ShoppingCartController = require('./src/controllers/shoppingCartController');
const OrderController = require('./src/controllers/OrderController');

const routes = express.Router();

/*PRODUTS*/
routes.get('/products/list', ProductController.list);

/*STORES*/
routes.get('/stores/list', StoreController.list);

/*CLIENTS*/
routes.get('/clients/list', ClientController.list);
routes.post('/clients/create', ClientController.create);

/*SHOPPINGCARTS*/
routes.post('/shoppingcarts/create', ShoppingCartController.create); 
routes.delete('/shoppingcarts/delete', ShoppingCartController.delete); 
routes.post('/shoppingcarts/create', ShoppingCartController.create);
routes.delete('/shoppingcarts/delete', ShoppingCartController.delete);

/*ORDER*/
routes.post('/order/create', OrderController.create);
routes.put('/order/update/status', OrderController.updateStatus);
routes.get('/clients/orders/list/:clientId', OrderController.listOrderByClient);

module.exports = routes;