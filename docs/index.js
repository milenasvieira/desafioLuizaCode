const basicInfo = require("./basicInfo")
const servers = require("./servers")
// const userRoutes1 = require("./product")
// const userRoutes2 = require("./store")
const userRoutes = require("./client")



const doc = {
    ...basicInfo,
    ...servers,
    // ...userRoutes1,
    // ...userRoutes2,
    ...userRoutes,

}
console.log(doc);
module.exports=doc;