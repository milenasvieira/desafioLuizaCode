
const { Model, DataTypes } = require('sequelize');


class Product extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            value: DataTypes.DOUBLE,
            value: DataTypes.DOUBLE
        }, {
            sequelize,
        })
    }
    static associate(models) {
        this.belongsToMany(models.ShoppingCart, {
            foreignKey: 'productId',
            otherKey: 'shoppingCartId',
            through: 'cartProducts',
            as: 'shoppingCarts'
        });
        this.belongsToMany(models.Order, { 
            foreignKey: 'productId',
            otherKey: 'orderId',
            through: 'cartProducts',
            as: 'orders'
        });
    }
}

module.exports = Product;