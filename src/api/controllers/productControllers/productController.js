const sequelize = require('../../../../database');

const productsList = async (req, res) => {
    const products = await sequelize('products').select();
    res.send(products);
}

module.exports = productsList;