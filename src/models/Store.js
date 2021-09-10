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
        this.hasMany(models.Order, { foreignKey: 'id', as: 'orders' });
    }
}

module.exports = Store;