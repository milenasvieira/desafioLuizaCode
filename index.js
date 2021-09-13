//const express = require('express');
const swagger = require ("swagger-ui-express");
const docs = require('./docs');

const app = require('./src/services/express')
const routes = require('./routes');

require('./src/database');


app.use(routes);
app.use("/docs", swagger.serve, swagger.setup(docs))

app.use('/api-docs', swagger.serve, swagger.setup(docs));

