const ShoppingCart = require('../models/ShoppingCart');
const Product = require('../models/Product');
const CartProduct = require('../models/CartProduct');

module.exports = {
      async create(req, res) {

            const { clientId, productId } = req.body;

            try {
                  const shoppingCartFindOne = await ShoppingCart.findOne({
                        where: { clientId, isFinished: false }
                  });

                  if (shoppingCartFindOne == null || shoppingCartFindOne == "") {

                        const shoppingCartCreate = await ShoppingCart.create({ clientId, isFinished: false });

                        const shoppingCartID = shoppingCartCreate.id

                        await cartProdutsCreate(shoppingCartID)

                  } else if (shoppingCartFindOne !== null || shoppingCartFindOne == "") {

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

                              if (cartProductFindOne !== null || cartProductFindOne == "") throw ("Não é possível adicionar um produto do mesmo tipo no carrinho")

                              const cartProductsCreate = await CartProduct.create(cartProducsItens)

                              return res.json(cartProductsCreate);

                        } catch (err) {
                              return res.status(401).send(err);
                        }
                  }
            } catch (err) {
                  return res.status(400).send(err);
            }
      },


      async delete(req, res) {

            const { clientId, productId } = req.body;

            const shoppingCartFindOne = await ShoppingCart.findOne({
                  where: { clientId, isFinished: false }
            });

            if (shoppingCartFindOne == null || shoppingCartFindOne == "") throw ("Este carrinho não existe.")

            const shoppingCartId = shoppingCartFindOne.id

            const [shoppingCartProducts] = await CartProduct.findAll({
                  where: { shoppingCartId: shoppingCartFindOne.id }
            })

            if (shoppingCartProducts == null || shoppingCartProducts == "") throw ("Este carrinho está vazio.")


            const cartProductItem = await CartProduct.findOne({
                  where: { productId: productId }
            })

            if (cartProductItem == null || cartProductItem == "") throw ("Este produto não existe nesse carrinho.")


            await CartProduct.destroy({
                  where: { shoppingCartId, productId }
            });

            return res.send('Produto deletado');
      }
}