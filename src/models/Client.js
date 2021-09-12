const { Model, DataTypes } = require('sequelize')

class Client extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
        }, {
            sequelize
        })


    }
    static associate(models) {
        this.hasMany(models.ShoppingCart, { foreignKey: 'id', as: 'shoppingCarts' });
        this.hasMany(models.Order, { foreignKey: 'id', as: 'orders' });
    }
}

module.exports = Client;