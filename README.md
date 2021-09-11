# Desafio Final - Luiza Code | LuDevs

## Sobre o projeto


## Endpoints

- Listar lojas físicas;     x
- Cadastrar clientes;       x
- Listar produtos;          x
- Adicionar um produto na lista de compra da cliente;
- Remover um produto da lista de compra da cliente;
- Finalizar compra;
- Consultar todas as compras realizadas da cliente;

## Como rodar

🔥 Instalação e execução
Faça um clone desse repositório;
git clone HTTPS https://github.com/milenasvieira/desafioLuizaCode.git
  or
git clone SSH git@github.com:milenasvieira/desafioLuizaCode.git     //branch teste jadeohara-090921-crud
Excute o projeto por qualquer IDE
Visual Studio Code
Altere as credencias de banco dentro de:
/`src/services/database.js`
Rode para criar o banco de dados;
/`npx sequelize-cli db:create`
Rode para executar as migrations;
/`npx sequelize-cli db:migrate`
Rode para executar as seeders;
/ `npx sequelize-cli db:seed:all`
Rode para iniciar o servidor;
/ `node index.js ou nodemon index.js`
Acesse os endpoints e importe o arquivo Insomnia_2021-09-10.json desse repositório no Insomnia;
Postman / Insomnia

//Adicionar dependências com npm - inclusive sequelize-cli global