const ShoppingCart = require('../models/ShoppingCart');

module.exports = {
    async created(req, res) {
        const { clientId , productId } = req.body;

        const shoppingCart = await ShoppingCart.create({ productId });

        return res.json(shoppingCart);
    },
}