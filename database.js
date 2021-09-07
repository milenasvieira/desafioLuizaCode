// const Sequelize = require('sequelize');
// const sequelizeBD = new Sequelize('luiza_code', 'ludevs', 'ludevs2021', {dialect: 'mysql', host: 'localhost'});
 
// module.exports = sequelizeBD;
const Sequelize = require('sequelize');
const sequelizeBD = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'ludevs',
    port: '3306',
    password: 'ludevs2021',
    database: 'luiza_code',
    define: {
      timestamps: true,
      underscored: true,
    },
}
);
 
module.exports = sequelizeBD;