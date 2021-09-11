npx sequelize-cli db:create
npx sequelize-cli db:migrate:undo:all --to nomedamigration.js
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all