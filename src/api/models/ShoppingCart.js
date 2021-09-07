const { Model, DataTypes } = require('sequelize')

class ShoppingCart extends Model {
    static init(sequelize){
        super.init({
            createdAt: DataTypes.DATE,
        })
    }
    static associate(models) {
        this.hasMany(models.Product, { foreignKey: 'productId', through: 'cartProducts', as: 'products' });
        this.belongsToMany(models.Client, { foreignKey: 'clientId', as: 'clients' });
        this.belongsTo(models.Store, { foreignKey: 'storeId', as: 'stores' });
    }
}

module.exports = ShoppingCart;