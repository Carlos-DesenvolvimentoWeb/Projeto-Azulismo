(async () => {
  const database = require("../database/db")

  const User = require("./models/userModel")
  //const Crianca = require("./models/criancaModel")

  await database
    .sync() //{ force: true }
    .then((result) => {
      console.log("Banco Sincronizado!");
    })
    .catch((error) => {
      console.log({ mensagem: error });
    });
})();


require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');

app.use(cors({
  origin: 'http://localhost:3000',  // Permite solicitações da origem do frontend
  methods: 'GET,POST,PUT,DELETE',   // Métodos HTTP permitidos
  allowedHeaders: 'Content-Type,Authorization'  // Cabeçalhos permitidos
}));

const passport = require("./config/passport") //n
const sequelize = require("../database/db")
const User = require("./models/userModel")

const NODE_ENV = process.env.NODE_ENV || 'development';
// Configurações e middlewares aqui
app.use(express.json());

// Rotas da API
const userRoutes = require('./routes/userRoute');

app.use('/api', userRoutes);


app.use(express.static(path.join(__dirname, '../layout/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../layout/build', 'index.html'));
});


// Porta do servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
