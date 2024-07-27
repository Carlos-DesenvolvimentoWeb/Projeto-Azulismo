const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');
const path = require('path');
const db = require('./models/database');
const keys = require('./config/config'); // Chaves de configuração
require('dotenv').config();
require('./strategies/passport');

const app = express();

// Configurações e middlewares aqui
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey],
  })
);

//Inicialização do Passport
app.use(passport.initialize());
app.use(passport.session());

// Rotas da API
const userRoutes = require('./routes/userRoute');
app.use('/api/users', userRoutes);


// Servir arquivos estáticos do frontend em produção
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../layout/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../layout/build', 'index.html'));
  });
}

// Porta do servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Sincronização do banco de dados
/*
if (db) {
  db.sync()
    .then(() => {
      console.log('Banco de dados sincronizado');
    })
    .catch((err) => {
      console.log('Erro ao sincronizar o banco de dados:', err);
    });
} else {
  console.warn('Banco de dados não configurado. Ignorando sincronização.');
}*/
