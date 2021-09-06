//const { Router } = require('express');
const productsController = require('./src/api/controllers/productControllers/productController');

//const routes = Router();
const configRoutes = app => {
    app.get('/productsList', productsController);
    app.get('/productsList', (req, res) => res.send())
}

module.exports = configRoutes;
