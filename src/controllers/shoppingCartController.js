const ShoppingCart = require('../models/ShoppingCart');
const Product = require('../models/Product');
const CartProduct = require('../models/CartProduct');

module.exports = {
    async creat(req, res) {

            const { clientId, productId } = req.body;

            const productID = req.body.productId
            console.log('productID',productID)

            //const [ shoppingcart ] = await ShoppingCart.findOrCreate({
            //   where: { clientId, productId }
            // });

            const shoppingCartCreate = await ShoppingCart.create({ clientId, productId });
            console.log('shoppingCartCreate',shoppingCartCreate)

            const shoppingCartID = shoppingCartCreate.id
            console.log('shoppingCartID',shoppingCartID)

            const productItens = await Product.findByPk(productId)

            const cartProducsItens = {
                  shoppingCartId: shoppingCartCreate.id,
                  productId: productItens.id,
                  name: productItens.name,
                  value: productItens.value
                }
            
            const cartProductsCreate = await CartProduct.create(cartProducsItens)
            console.log('cartProductsCreate', cartProductsCreate)

            return res.json(shoppingCartCreate);

      }  

}




// const ShoppingCart = require('../models/ShoppingCart');
// const Product = require('../models/Product');
// const CartProduct = require('../models/CartProduct');

// module.exports = {
//     async creat(req, res) {

//             const { clientId, productId } = req.body;

//             const productID = req.body.productId
//             console.log('productID',productID)

//             //const [ shoppingcart ] = await ShoppingCart.findOrCreate({
//             //   where: { clientId, productId }
//             // });

//             const shoppingCartCreate = await ShoppingCart.create({ clientId, productId });
//             console.log('shoppingCartCreate',shoppingCartCreate)

//             const shoppingCartID = shoppingCartCreate.id
//             console.log('shoppingCartID',shoppingCartID)

//             const productItens = await Product.findByPk(productId)

//             const cartProducsItens = {
//                   shoppingCartId: shoppingCartCreate.id,
//                   productId: productItens.id,
//                   name: productItens.name,
//                   value: productItens.value
//                 }
            
//             const cartProductsCreate = await CartProduct.create(cartProducsItens)
//             console.log('cartProductsCreate', cartProductsCreate)

//             return res.json(shoppingCartCreate);

//       }  

// }