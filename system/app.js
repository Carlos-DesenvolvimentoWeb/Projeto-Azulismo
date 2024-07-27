const express = require('express');
const path = require('path');
const app = express();

// Configurações e middlewares aqui
app.use(express.json());

// Rotas da API
const userRoutes = require('./routes/userRoutes');

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
