const { Model, DataTypes } = require('sequelize')

class Product extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            value: DataTypes.DOUBLE
        })
    }
    static associate(models) {
        this.belongsToMany(models.ShoppingCart, { foreignKey: 'shoppingCartId', through: 'cartProducts', as: 'shoppingCarts' });
    }
}

module.exports = Product;