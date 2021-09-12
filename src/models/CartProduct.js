const { Model, DataTypes } = require('sequelize')

class CartProduct extends Model {
  static init(sequelize) {
    super.init({
      //id: DataTypes.UUID,
      shoppingCartId: DataTypes.UUID,
      productId: DataTypes.UUID,
      name: DataTypes.STRING,
      value: DataTypes.DOUBLE
    }, {
      sequelize,
    })
  }
}

module.exports = CartProduct;