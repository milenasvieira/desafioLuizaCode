//const express = require('express');
const swagger = require ("swagger-ui-express");
const docs = require('./docs');

const app = require('./src/services/express')
const routes = require('./routes');

require('./src/database');

//const app = express();
//const port = 3000

//app.use(express.json());

app.use(routes);
app.use("/docs", swagger.serve, swagger.setup(docs))

app.use('/api-docs', swagger.serve, swagger.setup(docs));

// app.listen(port, () => {
//     console.log(`Servidor iniciado em http://localhost:${port}`)
// })

// module.exports = app;