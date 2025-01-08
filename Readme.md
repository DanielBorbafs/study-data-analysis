<h2 align="center">🚀 Projeto Full Stack - Backend & Frontend 📦</h2>

<p align="center">
  Este é um projeto full stack com <strong>Backend</strong> e <strong>Frontend</strong>, utilizando <strong>Node.js</strong>, <strong>Prisma</strong> para integração com MongoDB e outras tecnologias para o desenvolvimento.
</p>

<hr>

<h2>🧰 COMO RODAR O PROJETO</h2>

<p>
  Para rodar o projeto localmente, você precisará configurar tanto o **Backend** quanto o **Frontend**. Siga os passos abaixo:
</p>

### 1. **Instalar Dependências do Backend** 🖥️

   - Navegue até a pasta do **backend** e instale as dependências:
   
     ```bash
     cd backend
     npm install
     ```

### 2. **Configurar o Banco de Dados** 🗄️

   - Certifique-se de ter uma chave de **MongoDB**. Você pode obter uma chave de acesso no [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) ou usar um banco local.
   - No arquivo `prisma/schema.prisma`, insira a **URI do MongoDB** no campo `url` da fonte de dados:

     ```prisma
     datasource db {
       provider = "mongodb"
       url      = "mongodb+srv://<seu-usuario>:<sua-senha>@cluster0.mongodb.net/<seu-banco>?retryWrites=true&w=majority"
     }
     ```

### 3. **Rodar o Backend** 🔧

   - Depois de configurar o banco de dados, execute o **Backend** com o comando abaixo para rodar o servidor com **Nodemon**:
   
     ```bash
     nodemon server.js
     ```

     O **Nodemon** irá iniciar o servidor e monitorar as alterações no código automaticamente.

### 4. **Instalar Dependências do Frontend** 🌐

   - Agora, navegue até a pasta do **frontend** e instale as dependências:
   
     ```bash
     cd ../frontend/cadastro
     npm install
     ```

### 5. **Gerar o Prisma Client** ⚙️

   - Antes de rodar o frontend, você precisa gerar o **Prisma Client** para garantir que as consultas ao banco de dados estejam configuradas corretamente:
   
     ```bash
     npx prisma generate
     ```

### 6. **Rodar o Frontend** 🖥️

   - Após gerar o Prisma Client, você pode rodar o **Frontend** com o comando:
   
     ```bash
     npm run dev
     ```

     O **Frontend** estará disponível no endereço local, geralmente `http://localhost:5173/`.

---

<h2>💡 O QUE VOCÊ VAI PRECISAR</h2>

- **Node.js**: Certifique-se de ter o [Node.js](https://nodejs.org/) instalado no seu ambiente.
- **MongoDB**: Uma conta no [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) ou um banco de dados MongoDB local configurado.
- **Prisma**: Prisma é utilizado para facilitar a integração entre o Node.js e o banco de dados MongoDB.

---

<p align="center">
  <strong>Este repositório será atualizado ao longo do tempo para uma aplicação maior, por isso o nodemon ainda está ativo pois ainda está em fase de desenvolvimento.</strong>
</p>
