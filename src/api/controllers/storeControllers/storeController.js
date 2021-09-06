const stores =  require('../../entities/stores');

const storesList =  async (req, res) => {
    return console.log(res.send(stores))
}

module.exports = storesList;

// const conn = require("../services/mysql");

// const list = async (_req, res) => {

//     const users = await conn("users").select();
//     res.send(users);
//     // db("users").select().then((users => {
//     //     res.send(users)
//     // }))
// }

// module.exports = list;
