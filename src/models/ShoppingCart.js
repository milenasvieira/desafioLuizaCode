const { Model, DataTypes } = require('sequelize')

class ShoppingCart extends Model {
    static init(sequelize){
        super.init({
            //status: DataTypes.INTEGER[1],
            createdAt: DataTypes.DATE,
        },{
         sequelize
        })
    }
    static associate(models) {
        this.belongsToMany(models.Product, { foreignKey: 'id', through: 'cartProducts', as: 'products' });
        this.belongsTo(models.Client, { foreignKey: 'id', as: 'clients' });
        this.hasOne(models.Store, { foreignKey: 'id', as: 'stores' });
    }
}

module.exports = ShoppingCart;

// tava dando muito erro em store storeId - alterei para id ai listou os produtos.