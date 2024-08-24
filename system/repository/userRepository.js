const User = require("../models/userModel")

class UserRepository {
    constructor(UserModel) {
        this.User = UserModel;
    }

    async findByUsername(username) {

        console.log(username)
        return await this.User.findOne({ where: { username } });
    }

    async createUser(userData) {
        try {
            // Cria um novo usuário no banco de dados
            const newUser = await User.create(userData);
            return newUser;
        } catch (error) {
            // Lida com erros, pode ser melhorado com logging
            throw new Error('Erro ao criar usuário: ' + error.message);
        }
    }

    // Outros métodos relacionados ao usuário podem ser adicionados aqui
}


// Outros métodos relacionados ao usuário podem ser adicionados aqui

module.exports = new UserRepository(User);