const ShoppingCart = require('../models/ShoppingCart');
const Order = require('../models/Order');
const OrderProduct = require('../models/OrderProduct');
const Product = require('../models/Product');
const CartProduct = require('../models/CartProduct');

module.exports = {
      async checkout(req, res) {

            const {  } = req.body;

            const [ shoppingCartCreate ] = await ShoppingCart.findOrCreate({
                  where: { clientId }
            });

            const shoppingCartID = shoppingCartCreate.id

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
                  
                  return res.json(cartProductsCreate);
                  
            } catch(err) {
                  return res.status(401).send(err); 
            }
      }
}
