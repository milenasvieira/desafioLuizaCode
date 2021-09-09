const { Model, DataTypes } = require('sequelize')

class Store extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            city: DataTypes.STRING
        }, { sequelize })
    }
    static associate(models) {
        this.hasMany(models.ShoppingCart, { foreignKey: 'storeId', as: 'shoppingCarts' });
    }
}

module.exports = Store;