const { Model, DataTypes } = require('sequelize')

class Store extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            city: DataTypes.STRING
        }, {
            sequelize,
            timestamps: false,
        })
    }
    static associate(models) {
        this.hasMany(models.ShoppingCart, { foreignKey: 'id', as: 'shoppingCarts' });
    }
}

module.exports = Store;