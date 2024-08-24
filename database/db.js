//database/db.js
const Sequelize = require('sequelize');
require('dotenv').config(); // Carregar as variáveis de ambiente do .env

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT
});

module.exports = sequelize;