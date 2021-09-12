const ShoppingCart = require('../models/ShoppingCart');
const Order = require('../models/Order')
const OrderProduct = require('../models/OrderProduct')
const CartProduct = require('../models/CartProduct')

module.exports = {
    async create(req, res) {

        const { shoppingCartId, storeId } = req.body;

        try {
            const shoppingCartItens = await ShoppingCart.findByPk(shoppingCartId)

            if (shoppingCartItens == null) throw ("Não foi possível finalizar a compra. O carrinho não existe.")

            const shoppingCartFindOneInOrder = await Order.findOne({
                where: { shoppingCartId }
            });

            if (shoppingCartFindOneInOrder !== null) throw ("Esta compra já foi realizada.")

            const orderItens = {
                shoppingCartId: shoppingCartId,
                clientId: shoppingCartItens.clientId,
                storeId: storeId,
                orderStatus: 1    //1 - Compra realizada
            }

            const orderCreate = await Order.create(orderItens)

            const orderID = orderCreate.id

            const cartProductsItens = await CartProduct.findAll({
                where: { shoppingCartId },
                raw: true
            })
            console.log("cartProductsItens", cartProductsItens)

            for (const iterator of cartProductsItens) {
                console.log("iterator",iterator)

                const orderProductItens = {
                    orderId: orderID,
                    productId: iterator.productId,
                    name: iterator.name,
                    value: iterator.value
                }


                const orderProductCreate = await OrderProduct.create(orderProductItens)

            }

            await ShoppingCart.update({
                isFinished: true    //carrinho de compras se tornou uma compra realizada
            }, {
                where: {
                    id: shoppingCartId
                }
            });

            return res.status(201).json('Compra Realizada');

        } catch (err) {
            return res.status(400).send(err);
        }
    },

    async updateStatus(req, res) {

        const { orderId, orderStatus } = req.body;

        try {
            const orderItens = await Order.findByPk(orderId)

            if (orderItens == null) throw ("Compra não localizada.")

            const storeId = orderItens.storeId


            if (storeId == null) throw ("Nenhuma loja selecionada para retirar esta compra.")

            const orderStatusUpdate = await Order.update({ 
                orderStatus: orderStatus  //2 - Compra retirada
            }, {
                where: {
                    id: orderId
                }
            });

            return res.status(201).json("Compra Retirada");

        } catch (err) {
            return res.status(404).json(err);
        }

    },

    async listOrderByClient(req, res) {

        const { clientId } = req.body;

        const clientOrders = await Order.findAll({
            where: { clientId: clientId }
        });

        return res.status(200).json(clientOrders);
    }

}
