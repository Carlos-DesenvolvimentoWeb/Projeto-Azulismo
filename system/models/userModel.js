const Sequelize = require("sequelize");
const bcrypt = require("bcryptjs");
const db = require("../../database/db");
const Crianca = require("./criancaModel")

const User = db.define('User', {
    idUsuario: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    nomeCrianca: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    dataNascimentoCrianca: {
        type: Sequelize.DATEONLY,
        allowNull: true,
    },
    nomeResponsavel: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: true,
    }
});

// Antes de salvar o usuário, criptografa a senha
User.beforeCreate(async (user) => {
    const hash = await bcrypt.hash(user.password, 8);
    user.password = hash;
});

// Método para validar senha
User.prototype.validatePassword = function (password) {
    return bcrypt.compare(password, this.password);
};

User.hasOne(Crianca, {
    foreingKey: "userId",
    allowNull: true
})

module.exports = User;
