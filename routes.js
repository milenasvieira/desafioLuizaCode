
const productsController = require('./src/api/controllers/productController');
//const express = require('express')
const routes = require('routes');
const configRoutes = app => {
    app.get('/productsList', productsController.index);
}

// routes.get('/', (req, res) => {
//     res.send('Hello World!')
//   })

module.exports = routes;

//routes.get('/publicacao', PublicacaoController.index)