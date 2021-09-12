const { Model, DataTypes } = require('sequelize')

class OrderProduct extends Model {
    static init(sequelize){
        super.init({
            orderId: DataTypes.UUID,
            productId: DataTypes.UUID,
            name: DataTypes.STRING,
            value: DataTypes.DOUBLE,
        },{
         sequelize
        })
    }
}

module.exports = OrderProduct;