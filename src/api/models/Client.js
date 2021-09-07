const { Model, DataTypes } = require('sequelize')

class Client extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE
        })
    }
    static associate(models) {
        this.belongsToMany(models.ShoppingCart, { foreignKey: 'shoppingCartId', as: 'shoppingCart' });
    }
}

module.exports = Client;