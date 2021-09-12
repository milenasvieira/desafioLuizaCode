const { Model, DataTypes } = require('sequelize')

class Order extends Model {
    static init(sequelize) {
        super.init({
            shoppingCartId: DataTypes.UUID,
            clientId: DataTypes.UUID,
            storeId: DataTypes.UUID,
            orderStatus: DataTypes.INTEGER(1), //1 Compra Realizada, 2 Compra Retirada
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE,
        }, {
            sequelize
        })
    }
    static associate(models) {
        this.belongsTo(models.ShoppingCart, { foreignKey: 'id', as: 'shoppingCarts' });
        this.belongsToMany(models.Product, {
            foreignKey: 'orderId',
            otherKey: 'productId',
            through: 'cartProducts',
            as: 'products'
        });
        this.belongsTo(models.Client, { foreignKey: 'id', as: 'clients' });
        this.hasOne(models.Store, { foreignKey: 'id', as: 'stores' });
    }
}

module.exports = Order;