const Store = require('../models/Store');

module.exports = {
    async list(req, res) {
        try {
            const stores = await Store.findAll();
            return res.status(200).json(stores);

        } catch (err) {
            return res.status(400).json(err);
        }
    },
};
