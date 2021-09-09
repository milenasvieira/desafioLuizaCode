// (async () => {
//   const database = require('./database');
//   //const Product = require('./src/api/models/Product');

//   try {
//       const resultado = await database.sync();
//       console.log(resultado);
//   } catch (error) {
//       console.log(error);
//   }
// })();

const app = require("./src/api/services/express");
const configRoutes = require("./routes")

configRoutes(app)