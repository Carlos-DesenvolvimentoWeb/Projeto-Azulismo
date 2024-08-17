require('dotenv').config();
const express = require('express');
const passport = require('./config/passport');
const sequelize = require('../database/db');
const User = require('./models/userModel');
const app = express();


const NODE_ENV = process.env.NODE_ENV || 'development';

// Configurações e middlewares aqui
app.use(express.json());
app.use(passport.initialize());

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

// Sincronizar o modelo com o banco de dados
sequelize.sync({ force: false }) // force: true recria a tabela sempre que o servidor é iniciado
  .then(() => {
    console.log('Banco Sincronizado!');
  })
  .catch(err => {
    console.error('Erro na sincronização:', err);
  });
