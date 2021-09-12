const Store = require('../models/Store');

module.exports = {
    async list(req, res) {
        const stores = await Store.findAll();

        return res.json(stores);
    },
};
