const { application } = require('express');
const productsList = require('./src/api/controllers/productController');
const productsController = require('./src/api/controllers/productController');
const storeController = require('./src/api/controllers/storeController');

const configRoutes = app => {

    // app.get("/", (req, res) => {
    //     res.json({ message: "Mensagem." });
    //   });

    app.get('/products/list', productsController.list )
    //app.get('/stores/list', storeController.list)

}

module.exports = configRoutes;