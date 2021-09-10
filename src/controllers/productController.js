const Product = require('../models/Product');

module.exports = {
    async list(req, res) {
        const products = await Product.findAll();

        return res.json(products);
    },

    // async store(req, res) {
    //   const { name, value } = req.body;

    //   const product = await product.create({ name, value });

    //   return res.json(product);
    // }
};