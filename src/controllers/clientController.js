const Client = require('../models/Client');

module.exports = {

    async creat(req, res) {
        const { name } = req.body;

        const clients = await Client.create({ name });

        return res.json(clients);
    },

    async list(req, res) {
        const clients = await Client.findAll();

        return res.json(clients);
    },

};