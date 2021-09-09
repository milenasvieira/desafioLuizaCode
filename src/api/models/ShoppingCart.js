const { Model, DataTypes } = require('sequelize')

class ShoppingCart extends Model {
    static init(sequelize){
        super.init({
            createdAt: DataTypes.DATE,
        }, { sequelize })
    }
    static associate(models) {
        this.belongsToMany(models.Product, { foreignKey: 'productId', through: 'cartProducts', as: 'products' });
        this.belongsTo(models.Client, { foreignKey: 'clientId', as: 'clients' });
        this.belongsTo(models.Store, { foreignKey: 'storeId', as: 'stores' });
    }
}

module.exports = ShoppingCart;