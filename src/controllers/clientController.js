const Client = require('../models/Client');

module.exports = {

    async create(req, res) {

        try {
            const { name } = req.body;

            const clients = await Client.create({ name });

            return res.status(201).json(clients);

        } catch (err) {

            return res.status(400).json(err);
        }
    },

    async list(req, res) {

        try {
            const clients = await Client.findAll();

            return res.status(200).json(clients);

        } catch (err) {

            return res.status(400).json(err);
        }

    },

};