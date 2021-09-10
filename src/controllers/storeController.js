const Store = require('../models/Store');

module.exports = {
    async list(req, res) {
        const stores = await Store.findAll();

        return res.json(stores);
    },
};


// const Store = require("../models/Store");

// module.exports = {
//     async list(req, res) {
//         console.log('teste')
//         console.log(Store.findAll)
//         const storesList = await Store.findAll();
//         console.log('depois do teste')
//         return res.send({storesList})
//     }
// }

// const conn = require("../services/mysql");

// const list = async (_req, res) => {

//     const users = await conn("users").select();
//     res.send(users);
//     // db("users").select().then((users => {
//     //     res.send(users)
//     // }))
// }

// module.exports = list;
