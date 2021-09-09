const express = require('express')
const configRoutes = require('../../../routes')

const app = express();
const port = 3000;

app.use(express.json())


app.listen(port, () => {
    console.log(`Servidor iniciado em http://localhost:${port}`)
})

module.exports = app;