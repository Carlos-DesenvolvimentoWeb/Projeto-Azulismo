const Sequelize = require("sequelize")
const db = require("../../database/db");

const Crianca = db.define("crianca", {

    idCrianca: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    idade: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    dataNascimento: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    imagemPerfil: {
        type: Sequelize.STRING,
        allowNull: true,
    }
})

module.exports = Crianca
