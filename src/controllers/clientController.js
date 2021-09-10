const Client = require('../models/Client');

module.exports = {

    async store(req, res) {
        const { name } = req.body;

        const clientsStore = await Client.create({ name });

        return res.json(clientsStore);
    },

    async list(req, res) {
        const clients = await Client.findAll();

        return res.json(clients);
    },
};