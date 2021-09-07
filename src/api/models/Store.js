const { Model, DataTypes } = require('sequelize')

class Store extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            city: DataTypes.STRING
        })
    }
    static associate(models) {
        this.hasMany(models.ShoppingCart, { foreignKey: 'shoppingCartId', as: 'shoppingCarts' });
    }
}

module.exports = Store;