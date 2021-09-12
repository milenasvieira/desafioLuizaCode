const ShoppingCart = require('../models/ShoppingCart');
const Order = require('../models/Order')
var Sequelize = require('sequelize');
var dbConfig = require('../services/database')

const sequelize = new Sequelize(dbConfig);

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

            //USAR AQUI ATUALIZAR  ORDERPRODUCTS
            sequelize.query(`
            INSERT INTO orderproducts (orderId, productId, name, value)
            SELECT orders.id, cartproducts.productId, cartproducts.name, cartproducts.value 
            FROM cartproducts
            INNER JOIN orders
            ON cartproducts.shoppingCartId = ${shoppingCartId} = orders.shoppingCartId = ${shoppingCartId};`, { 
                type:Sequelize.QueryTypes.INSERT
            }) // .then(function(results) {
            //     console.log(results) // or do whatever you want
            // })

            // DELETAR DAQUI
            // const cartProductsItens = await CartProduct.findAll({
            //     where: { shoppingCartId }
            // })
            // console.log("cartProductsItens", cartProductsItens)

            // const cartProductKeys = cartProductsItens.keys(dataValues)
            // console.log("cartProductKeys",cartProductKeys)

            // const orderProductItens = {
            //     orderId: orderID,
            //     productId: cartProductsItens.productId,
            //     name: cartProductsItens.name,
            //     value: cartProductsItens.value
            // }
            
            // const orderProductCreate = await OrderProduct.create(orderProductItens)
            // console.log("orderProductCreate", orderProductCreate)
            // ATÉ AQUI

            await ShoppingCart.update({
                isFinished: true    //carrinho de compras se tornou uma compra realizada
            }, {
                where: {
                    id: shoppingCartId
                }
            });

            return res.status(201).json('Compra Realizada', orderCreate);

        } catch (err) {
            return res.status(400).send(err);
        }
    },

    async updateStatus(req, res) {

        const { orderId, orderStatus } = req.body;

        try {
            const orderItens = await Order.findByPk(orderId)
            console.log('orderItens',orderItens)
            if (orderItens == null) throw ("Compra não localizada.")

            const storeId = orderItens.storeId
            console.log('storeId',storeId)

            if(storeId == null) throw ("Nenhuma loja selecionada para retirar esta compra.")

            const orderStatusUpdate = await Order.update({ //verificar se atualizou a tabela
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
        
    }
}


