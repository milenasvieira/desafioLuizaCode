const ShoppingCart = require('../models/ShoppingCart');
const Product = require('../models/Product');
const CartProduct = require('../models/CartProduct');

module.exports = {
      async creat(req, res) {

            const { clientId, productId } = req.body;

            // const clientID = req.body.clientId
            // console.log('clientID', clientID)

            // const productID = req.body.productId
            // console.log('productID', productID)

            const [ shoppingCartCreate ] = await ShoppingCart.findOrCreate({
                  where: { clientId }
            });

            //const shoppingCartCreate = await ShoppingCart.create({ clientId });
            //console.log('shoppingCartCreate', shoppingCartCreate)

            const shoppingCartID = shoppingCartCreate.id
            //console.log('shoppingCartID', shoppingCartID)

            const productItens = await Product.findByPk(productId)

            const cartProducsItens = {
                  shoppingCartId: shoppingCartCreate.id,
                  productId: productItens.id,
                  name: productItens.name,
                  value: productItens.value
            }     
            try {

                  const cartProductFindOne = await CartProduct.findOne({
                        where: { shoppingCartID , productId }
                  })

                  if (cartProductFindOne !== null) throw ("Não é possível adicionar um produto do mesmo tipo no carrinho")

                  const cartProductsCreate = await CartProduct.create(cartProducsItens)
                  
                  //console.log('cartProductsCreate', cartProductsCreate)
                  return res.json(cartProductsCreate);
                  
            } catch(err) {
                  return res.status(401).send(err); 
            }

            //const cartProductsCreate = await CartProduct.create(cartProducsItens)
            //console.log('cartProductsCreate', cartProductsCreate)

            //return res.json(shoppingCartCreate);
      },

      // async delet(req, res) {

      //       const { clientId, productId } = req.body;

      //       const [ shoppingCartCreate ] = await ShoppingCart.findOrCreate({
      //             where: { clientId }
      //       });

      //       const shoppingCartID = shoppingCartCreate.id

      //       const productItens = await Product.findByPk(productId)

      //       const cartProducsItens = {
      //             shoppingCartId: shoppingCartCreate.id,
      //             productId: productItens.id,
      //             name: productItens.name,
      //             value: productItens.value
      //       }     
      //       try {

      //             const cartProductFindOne = await CartProduct.findOne({
      //                   where: { shoppingCartID , productId }
      //             })

      //             if (cartProductFindOne !== null) throw ("Não é possível adicionar um produto do mesmo tipo no carrinho")

      //             const cartProductsCreate = await CartProduct.create(cartProducsItens)
                  
      //             //console.log('cartProductsCreate', cartProductsCreate)
      //             return res.json(cartProductsCreate);
                  
      //       } catch(err) {
      //             return res.status(401).send(err); 
      //       }

      // }

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