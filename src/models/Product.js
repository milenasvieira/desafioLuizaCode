
const { Model, DataTypes } = require('sequelize');


class Product extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            value: DataTypes.DOUBLE
        } , {
            sequelize,
          })
    }
    static associate(models) {
        this.belongsToMany(models.ShoppingCart, { foreignKey: 'id', through: 'cartProducts', as: 'shoppingCarts' });
    }
}

module.exports = Product;