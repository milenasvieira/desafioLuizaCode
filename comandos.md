npx sequelize-cli db:create
npx sequelize-cli db:migrate:undo:all 20210910014816-orders.js
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all