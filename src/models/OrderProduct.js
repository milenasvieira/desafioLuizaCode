const { Model, DataTypes } = require('sequelize')

class OrderProduct extends Model {
    static init(sequelize){
        super.init({
            shoppingCartId: DataTypes.UUID,
            productId: DataTypes.UUID,
            name: DataTypes.STRING,
            value: DataTypes.DOUBLE,
        },{
         sequelize
        })
    }
    static associate(models) {
        this.belongsToMany(models.Order, { foreignKey: 'id', through: 'orderProducts', as: 'products' });
        this.belongsTo(models.Client, { foreignKey: 'id', as: 'clients' });
        this.hasOne(models.Store, { foreignKey: 'id', as: 'stores' });
    }
}

module.exports = ShoppingCart;