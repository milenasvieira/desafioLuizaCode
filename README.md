# Desafio Final - Luiza Code 

# <p align="center"> Equipe LuDevs</p>

#### <h4 align="center"> Turma 2 - Grupo 6</h4>

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

Essa API permite a aplicação do conhecimento que desenvolvemos durante o curso. Colocando em prática os conceitos e exercícios propostos, centralizando as principais caracteristicas de uma Omni Channel.

## Arquitetura do projeto:

**Contêm os seguintes EndPoints obrigatorios**

* Listar produtos;
* Listar lojas físicas;
* Cadastrar cliente;
* Adicionar um produto na lista de compra da cliente;
* Remover um produto da lista de compra da cliente; 
* Finalizar compra;
* Consultar todas as compras realizadas da cliente;


**Exemplo de um database simples com seus relacionamentos(Diagrama):**
    
![image](https://user-images.githubusercontent.com/41996167/132949125-c49646d2-eba9-4117-aa43-d6ba6250b598.png)


## 🚀 Tecnologias Utilizadas: <br><br>

<a href="Java">
   <img align="center" alt="java" height="40" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-plain.svg">
</a>
<a href="Java">
   <img align="center" alt="mysql" height="40" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg">
</a>
    <a href="Java">
   <img align="center" alt="mysql" height="40" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg">
</a>
    <a href="Java">
   <img align="center" alt="mysql" height="40" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sequelize/sequelize-original.svg">
</a>

- ⚡ Express — A web framework for Node.js
- 💾 Sequelize — SQL dialect ORM for Node.js

    
## ✋🏻 Pré-requisitos

- [Node.js](https://nodejs.org/en/)


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
2. Excute o projeto por qualquer IDE;
   ```sh
   Visual Studio Code
   ```
3. Caso deseje alterar as credencias de banco, acesse:
    ```sh
   /`src/services/database.js`
   ```
4. Rode para criar o banco de dados;
    ```sh
   /`npx sequelize-cli db:create`
   ```
5. Rode  para executar as migrations;
     ```sh
   /`npx sequelize-cli db:migrate`
   ```   
6. Rode para executar as seeders;
      ```sh
   / `npx sequelize-cli db:seed:all`
   ```   
7. Rode para iniciar o servidor;
    ```sh
   / `node index.js ou nodemon index.js`
   ```
8. Acesse os endpoints e  importe o arquivo `Insomnia_2021-09-10.json` ou postman `postman_2021-09-10.json` desse repositório no Insomnia ou postman;
   ```sh
   Postman / Insomnia 
   ```
9. Acesse o Swagger
   ```sh
   http://localhost:3000/docs 
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
![image](https://user-images.githubusercontent.com/41996167/133008207-240b03ae-52f6-4201-9d7f-ad6ba671890b.png)

_Shoppincarts Endpoints_
![image](https://user-images.githubusercontent.com/41996167/133008255-3ee74fe5-e886-4ae9-bb5c-8450c560084c.png)


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
            <br><sub><b>Milena Soares</b></sub><br>
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

    
