const { Model, DataTypes } = require('sequelize');

class ShoppingCart extends Model {
    static init(sequelize) {
        super.init({
            clientId: DataTypes.UUID,
            productId: DataTypes.UUID,
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE
        }, {
            sequelize
        })
    }
    static associate(models) {
        this.hasOne(models.Order, { foreignKey: 'id', as: 'orders' });
        this.belongsToMany(models.Product, {
            foreignKey: 'shoppingCartId',
            otherKey: 'productId',
            through: 'cartProducts',
            as: 'products'
        });
        this.belongsTo(models.Client, { foreignKey: 'id', as: 'clients' });
    }
}

module.exports = ShoppingCart;

// tava dando muito erro em store storeId - alterei para id ai listou os produtos.