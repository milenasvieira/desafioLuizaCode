const ShoppingCart = require('../models/ShoppingCart');

module.exports = {
    async creat(req, res) {

            const { clientId, productId } = req.body;

            const productID = req.body.productId
            console.log('productID',productID)

            // const [ shoppingcart ] = await ShoppingCart.findOrCreate({
            //   where: { clientId, productId }
            // });

            const shoppingCartCreate = await ShoppingCart.create({ clientId, productId });
            console.log('shoppingCartCreate',shoppingCartCreate)

            const shoppingCartID = shoppingCartCreate.id
            console.log('shoppingCartID',shoppingCartID)
            //const [productsTable] = findByPk(productID)
            
            //teste
            await shoppingCartCreate.addProduct(shoppingCartID,productID)  
            //await cartProduct.addProduct(productID)  

            return res.json('Carrinho criado', shoppingCartCreate);
      }  

}