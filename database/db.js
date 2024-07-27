const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  logging: false, // Desative o log se não for necessário
});

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o MySQL estabelecida com sucesso.');
  } catch (error) {
    console.error('Não foi possível conectar ao MySQL:', error);
  }
};

testConnection();

module.exports = sequelize;
