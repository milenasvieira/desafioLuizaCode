const ShoppingCart = require('../models/ShoppingCart');
const Order = require('../models/Order')
const OrderProduct = require('../models/OrderProduct');
const CartProduct = require('../models/CartProduct');

module.exports = {
    async create(req, res) {

        const { shoppingCartId, storeId } = req.body;
        //const { shoppingCartId } = req.params;

        // clientId, storeId, orderStatus
        try {
            console.log("shoppingCartId", shoppingCartId)
            const shoppingCartItens = await ShoppingCart.findByPk(shoppingCartId)
            console.log("shoppingCartItens", shoppingCartItens)

            if (shoppingCartItens == null) throw ("Não foi possível finalizar a compra. O carrinho não existe.")
            //verificar se criou  duas vezes a mesma compra

            const shoppingCartFindOneInOrder = await Order.findOne({
                where: { shoppingCartId }
            });
            console.log("shoppingCartFindOneInOrder", shoppingCartFindOneInOrder)
            if (shoppingCartFindOneInOrder !== null) throw ("Esta compra já foi realizada.")

            const orderItens = {
                shoppingCartId: shoppingCartId,
                clientId: shoppingCartItens.clientId,
                storeId: storeId,   //verificar nulo
                orderStatus: 1    //1 - Compre realizada
            }

            const orderCreate = await Order.create(orderItens)
            console.log("orderCreate", orderCreate)

            const orderID = orderCreate.id


            //fazer um loop pra criar todos  os  registros de cart  products em order  products
            const cartProductsItens = await CartProduct.findAll({
                where: { shoppingCartId }
            })
            console.log("cartProductsItens", cartProductsItens)

            const cartProductKeys = cartProductsItens.keys(dataValues)
            console.log("cartProductKeys",cartProductKeys)

            const orderProductItens = {
                orderId: orderID,
                productId: cartProductsItens.productId,
                name: cartProductsItens.name,
                value: cartProductsItens.value
            }
            

            const orderProductCreate = await OrderProduct.create(orderProductItens)
            console.log("orderProductCreate", orderProductCreate)

            await ShoppingCart.update({
                isFinished: true
            }, {
                where: {
                    id: shoppingCartId
                }
            });

            return res.status(201).json(orderCreate);

        } catch (err) {
            return res.status(400).send(err);
        }
    }
}
