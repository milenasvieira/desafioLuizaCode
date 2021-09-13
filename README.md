# Desafio Final - Luiza Code 

# <p align="center"> Equipe LuDevs</p>

#### <h4 align="center"> Turma 2 - Grupo 6</h4>

<div align="center">
<img src="https://user-images.githubusercontent.com/78439783/133023491-24673bf3-0205-47ab-8392-60a64b1c3c08.png" width="150px" height="150px">
</div>
                                                                                                                
<p align="center">
    <h3 align="center"> Desafio Final - Omni Channel </h3>
    <p align="center">
       API desenvolvida para o projeto final do Luiza Code 2021
    <br />
   </p>
<p>

# Sobre o projeto

Desenvolver uma das funcionalidades mais interessantes em um e-commerce é a Omni Channel. Ou seja, não há mais diferenças entre lojas físicas ou na web. O consumidor pode procurar 
o produto em uma loja física e comprar pela internet ou vice-versa. 
Basicamente, o cliente Omni Channel é aquele que utiliza de todos os canais simultaneamente, cruzando compras em ambientes físicos e online.

Essa API permite a aplicação do conhecimento que desenvolvemos durante o curso. Colocando em prática os conceitos e exercícios propostos, centralizando as principais características de uma Omni Channel.
    
## Regras do projeto
    
O cliente só pode comprar um produto de cada tipo. Após realizar a compra o status dessa compra é 'Realizada' e após a retirada do produto na loja física passa a ser 'Retirado'.

## Arquitetura do projeto:

**Contém os seguintes EndPoints obrigatórios**

* Listar produtos;
* Listar lojas físicas;
* Cadastrar cliente;
* Adicionar um produto na lista de compra da cliente;
* Remover um produto da lista de compra da cliente; 
* Finalizar compra;
* Consultar todas as compras realizadas da cliente;


**Exemplo de um database simples com seus relacionamentos (Diagrama):**

<div align="center">
<img src="https://user-images.githubusercontent.com/78439783/133024081-068fc916-155c-460d-82f6-82227bc50780.png" width="650px" height="500px">
</div>

## 🚀 Tecnologias Utilizadas: <br>

<a href="Node">
   <img align="center" alt="node" height="40" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-plain.svg">
</a>
<a href="MySQL">
   <img align="center" alt="mysql" height="40" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg">
</a>
    <a href="express">
   <img align="center" alt="express" height="40" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg">
</a>
    <a href="sequelize">
   <img align="center" alt="sequelize" height="40" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sequelize/sequelize-original.svg">
</a>

- ⚡ Express — A web framework for Node.js
- 💾 Sequelize — SQL dialect ORM for Node.js
- 📚 MySQL - Database

    
## ✋🏻 Pré-requisitos

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)


<!-- GETTING STARTED -->
## Começando

Siga as instruções para executar a API.

## 🔥 Instalação e execução

1. Faça um clone desse repositório;
   ```sh
   git clone HTTPS https://github.com/milenasvieira/desafioLuizaCode.git
     or
   git clone SSH git@github.com:milenasvieira/desafioLuizaCode.git
   ```

2. Execute o projeto por qualquer IDE

   ```sh
   npm install
   ```
3. Crie um banco de dados com o nome "luiza_code". Ou caso deseje alterar as credenciais de banco, acesse:
    ```sh
   /`src/services/database.js`
   ```
4. Execute as migrations;
     ```sh
   /`npx sequelize-cli db:migrate`
   ```   
5. Execute as seeders;
      ```sh
   / `npx sequelize-cli db:seed:all`
   ```   
6. Inicie o servidor;
    ```sh
   / `node index.js ou nodemon index.js`
   ```
7. Acesse os endpoints e importe o arquivo do postman `desafioLuizaCodeLuDevs.postman_collection.json` na pasta testes desse repositório;

9. Acesse o Swagger
   ```sh

   http://localhost:3000/docs/
   ```

<!-- USAGE EXAMPLES -->
## Uso

**Você tem acesso aos seguintes endpoints:**

_Client Endpoints_
![image](https://user-images.githubusercontent.com/41996167/133008323-e88dcffe-21d5-42c1-a030-6939212dffd0.png)

_Product Endpoints_
![image](https://user-images.githubusercontent.com/41996167/133008336-af4cd60d-5089-4445-9554-4c1245ab7a12.png)

_Store Endpoints_
![image](https://user-images.githubusercontent.com/41996167/133008184-f2c4756a-0501-45ea-b771-8f9cd3776519.png)

_Order Endpoints_
<<<<<<< HEAD
![image](https://user-images.githubusercontent.com/41996167/133003396-90bb392d-e324-48e1-be54-b32466111bf7.png)
    
_Shopping Carts EndPoints_
![image](https://user-images.githubusercontent.com/41996167/133003457-a00c80a6-cb24-4151-9450-55a34bc067de.png)

## <p align="center"> Equipe desenvolvedora 💖</p>


<table align="center">
  <td align="center"><br>
        <a href="https://www.linkedin.com/in/jadeohara">
            <img src="https://avatars.githubusercontent.com/u/88908627?v=4" width="105px;" alt="Jade Ohara" style="max-width:100%;border-radius: 50%;">
            <br><sub><b>Jade Ohara</b></sub><br>
        <p align="center">
            </a><br>
            <a href="https://github.com/JadeOhara">
                   <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" height="30" width="30">
            </a>
            <a href="https://www.linkedin.com/in/jadeohara/" rel="nofollow">
                 <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linkedin/linkedin-original.svg" height="30" width="30">
            </a>
            <a href="mailto:jade-ohara@hotmail.com">
                  <img src="https://user-images.githubusercontent.com/60053229/118977653-c8a76a00-b94c-11eb-8832-e815ed684ccf.png" height="30" width="30">
            </a>
       </p>
</td>
 <td align="center"><br>
        <a href="https://www.linkedin.com/in/milena-s-vieira">
            <img src="https://avatars.githubusercontent.com/u/78439783?v=4" width="105px;" alt="Milena Soares" style="max-width:100%;border-radius: 50%;">
            <br><sub><b>Milena Vieira</b></sub><br>
        <p align="center">
            </a><br>
            <a href="https://github.com/milenasvieira">
                   <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" height="30" width="30">
            </a>
            <a href="https://www.linkedin.com/in/milena-s-vieira/" rel="nofollow">
                 <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linkedin/linkedin-original.svg" height="30" width="30">
            </a>
            <a href="mailto:milenasvieira63@gmail.com">
                  <img src="https://user-images.githubusercontent.com/60053229/118977653-c8a76a00-b94c-11eb-8832-e815ed684ccf.png" height="30" width="30">
            </a>
       </p>
</td>

 <td align="center"><br>
        <a href="https://www.linkedin.com/in/michele-oliveira-969218122">
            <img src="https://avatars.githubusercontent.com/u/87742551?v=4" width="105px;" alt="Michele Oliveira" style="max-width:100%;border-radius: 50%;">
            <br><sub><b>Michele Oliveira</b></sub><br>
        <p align="center">
            </a><br>
            <a href="https://github.com/micoliveira">
                   <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" height="30" width="30">
            </a>
            <a href="https://www.linkedin.com/in/michele-oliveira-969218122/" rel="nofollow">
                 <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linkedin/linkedin-original.svg" height="30" width="30">
            </a>
            <a href="mailto:mariamichelep@gmail.com">
                  <img src="https://user-images.githubusercontent.com/60053229/118977653-c8a76a00-b94c-11eb-8832-e815ed684ccf.png" height="30" width="30">
            </a>
       </p>
</td>
<td align="center"><br>
        <a href="https://www.linkedin.com/in/paty-souza">
            <img src="https://avatars.githubusercontent.com/u/41996167?v=4" width="105px;" alt="Patrícia Souza" style="max-width:100%;border-radius: 50%;">
            <br><sub><b>Patrícia Souza</b></sub><br>
        <p align="center">
            </a><br>
            <a href="https://github.com/patysonar">
                   <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" height="30" width="30">
            </a>
            <a href="https://www.linkedin.com/in/paty-souza/" rel="nofollow">
                 <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linkedin/linkedin-original.svg" height="30" width="30">
            </a>
            <a href="mailto:patysonar@gmail.com">
                  <img src="https://user-images.githubusercontent.com/60053229/118977653-c8a76a00-b94c-11eb-8832-e815ed684ccf.png" height="30" width="30">
            </a>
       </p>
</td>

<td align="center"><br>
        <a href="https://www.linkedin.com/in/vit%C3%B3ria-santos-618352146">
            <img src="https://avatars.githubusercontent.com/u/88866482?v=4" width="105px;" alt="Vitória Santos" style="max-width:100%;border-radius: 50%;">
            <br><sub><b>Vitória Santos</b></sub><br>
        <p align="center">
            </a><br>
            <a href="https://github.com/Vitoriafersant">
                   <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" height="30" width="30">
            </a>
            <a href="https://www.linkedin.com/in/vit%C3%B3ria-santos-618352146/" rel="nofollow">
                 <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linkedin/linkedin-original.svg" height="30" width="30">
            </a>
            <a href="mailto:vitoria.fer.santos@hotmail.com">
                  <img src="https://user-images.githubusercontent.com/60053229/118977653-c8a76a00-b94c-11eb-8832-e815ed684ccf.png" height="30" width="30">
            </a>
       </p>
</td>

</table>

    
