const ShoppingCart = require('../models/ShoppingCart');
const Product = require('../models/Product');
const CartProduct = require('../models/CartProduct');

module.exports = {
      async create(req, res) {

            const { clientId, productId } = req.body;

            const shoppingCartFindOne = await ShoppingCart.findOne({
                  where: { clientId, isFinished: false }
            });

            if (shoppingCartFindOne == null) {

                  console.log("clientId", clientId)

                  const shoppingCartCreate = await ShoppingCart.create({ clientId, isFinished: false });

                  console.log("shoppingCartCreate", shoppingCartCreate)

                  const shoppingCartID = shoppingCartCreate.id

                  //return shoppingCartID

                  await cartProdutsCreate(shoppingCartID)

            } else if (shoppingCartFindOne !== null) {

                  const shoppingCartID = shoppingCartFindOne.id

                  await cartProdutsCreate(shoppingCartID)

            }


            async function cartProdutsCreate(shoppingCartID) {

                  const productItens = await Product.findByPk(productId)

                  const cartProducsItens = {
                        shoppingCartId: shoppingCartID,
                        productId: productItens.id,
                        name: productItens.name,
                        value: productItens.value
                  }
                  try {
                        const cartProductFindOne = await CartProduct.findOne({
                              where: { shoppingCartID, productId }
                        })

                        if (cartProductFindOne !== null) throw ("Não é possível adicionar um produto do mesmo tipo no carrinho")

                        const cartProductsCreate = await CartProduct.create(cartProducsItens)

                        return res.json(cartProductsCreate);

                  } catch (err) {
                        return res.status(401).send(err);
                  }
            }

      },



      async delete(req, res) {

            const { clientId, productId } = req.body;

            try {
                  const shoppingCartFindOne = await ShoppingCart.findOne({
                        where: { clientId, isFinished: false }
                  });

                  if (shoppingCartFindOne == null) throw ("Este carrinho não existe.")

                  const shoppingCartId = shoppingCartFindOne.id

                  const [shoppingCartProducts] = await CartProduct.findAll({
                        where: { shoppingCartId: shoppingCartFindOne.id }
                  })

                  if (shoppingCartProducts == null) throw ("Este carrinho está vazio.")


                  const cartProductItem = await CartProduct.findOne({
                        where: { productId: productId }
                  })

                  if (cartProductItem == null) throw ("Este produto não existe nesse carrinho.")


                  await CartProduct.destroy({
                        where: { shoppingCartId, productId }
                  });

                  return res.send('Produto deletado');

            } catch (err) {
                  console.log("err", err)
                  return res.status(404).send(err);
            }
      }
}



// async create(req, res) {

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

//             return res.json(cartProductsCreate);

//       } catch(err) {
//             return res.status(401).send(err); 
//       }
// },



// async delete(req, res) {

//       const { clientId , productId } = req.body;

//       try {
//             const shoppingCartFindOne = await ShoppingCart.findOne({
//             where: { clientId }
//       });

//       if (shoppingCartFindOne == null) throw ("Este carrinho não existe.")

//       const shoppingCartId = shoppingCartFindOne.id


//       const [ shoppingCartProducts ] = await CartProduct.findAll({
//             where: { shoppingCartId: shoppingCartFindOne.id}
//       })

//       if (shoppingCartProducts == null) throw ("Este carrinho está vazio.")


//       const cartProductItem = await CartProduct.findOne({
//             where: { productId: productId }
//       })

//       if (cartProductItem == null) throw ("Este produto não existe nesse carrinho.")


//       await CartProduct.destroy({
//             where: { shoppingCartId , productId }
//       });

//       return res.send('Produto deletado'); 

//       } catch(err){
//             console.log("err", err)
//             return res.status(404).send(err); 
//       }
// }