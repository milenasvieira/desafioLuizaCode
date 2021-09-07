const express = require('express')
const routes = require('./routes')
(async () => {
  const database = require('./database');
  const Product = require('./src/api/models/Product');

  try {
      const resultado = await database.sync();
      console.log(resultado);
  } catch (error) {
      console.log(error);
  }
})();
const app = express()
const port = 3000

app.use(routes)

app.use(express.json())

app.listen(port, () => {
  console.log(`Servidor iniciado em http://localhost:${port}`)
})