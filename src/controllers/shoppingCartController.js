const Product = require('../models/Product');
const ShoppingCart = require('../models/ShoppingCart');

module.exports = {
    async creat(req, res) {
            const { productId } = req.body;

            const shoppingCartCreate = await ShoppingCart.findOrCreate({
                where: { productId }
              });  
    
            return res.json(shoppingCartCreate);
      }  

}