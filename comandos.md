npx sequelize-cli db:create
npx sequelize-cli db:migrate:undo:all 20210907002350-shoppingCarts.js
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all