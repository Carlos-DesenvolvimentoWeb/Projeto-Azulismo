const { Sequelize } = require('sequelize');
require('dotenv').config();

/*let sequelize;

if (process.env.DB_NAME && process.env.DB_USER && process.env.DB_PASSWORD && process.env.DB_HOST) {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      dialect: 'mysql',
    }
  );
} else {
  console.warn('Variáveis de ambiente do banco de dados não definidas. Banco de dados não inicializado.');
}*/

//Configuração provisória enquanto não temos a sincronização do banco.
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
});

const User = require('./userModel')(sequelize, Sequelize.DataTypes);

const db = {
  sequelize,
  Sequelize,
  User,
};


module.exports = sequelize;
