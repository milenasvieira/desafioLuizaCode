// const { Model, DataTypes } = require('sequelize')

// class ShoppingCart extends Model {
//     static init(sequelize){
//         super.init({
//             createdAt: DataTypes.DATE,
//         },{
//          sequelize
//         })
//     }
//     static associate(models) {
//         this.belongsToMany(models.Product, { foreignKey: 'id', through: 'cartProducts', as: 'products' });
//         this.belongsTo(models.Client, { foreignKey: 'id', as: 'clients' });
//         this.hasOne(models.Store, { foreignKey: 'id', as: 'stores' });
//     }
// }

// module.exports = ShoppingCart;