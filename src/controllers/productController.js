const Product = require('../models/Product');

module.exports = {
    async list(req, res) {
        try {
            const products = await Product.findAll();

            return res.json(products);

        } catch (err) {
            return res.status(400).json(err);
        }
    },
};