
const app = require('./src/services/express')
const routes = require('./routes');

require('./src/database');


app.use(routes);

