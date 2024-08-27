const passport = require('passport');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const userRepository = require("../repository/userRepository")

module.exports = {
    // login: async (req, res) => {
    //   const { username, password } = req.body;
    //   try {
    //     const user = await User.findOne({ where: { username } });

    //     if (!user || !await user.validatePassword(password)) {
    //       return res.status(401).json({ message: 'Credenciais inválidas.' });
    //     }

    //     // Gera token JWT para autenticação
    //     const token = jwt.sign({ id: user.idUsuario }, process.env.JWT_SECRET, { expiresIn: '1d' });
    //     return res.json({ token });
    //   } catch (error) {
    //     return res.status(500).json({ message: 'Erro ao realizar login.', error: error.message });
    //   }
    // },

    login: async (req, res) => {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ message: 'Username e senha são obrigatórios.' });
        }

        try {
            const user = await userRepository.findByUsername(username);

            if (!user || !await user.validatePassword(password)) {
                return res.status(401).json({ message: 'Credenciais inválidas.' });
            }


            // Gera token JWT para autenticação
            const token = jwt.sign({ id: user.idUsuario }, process.env.JWT_SECRET, { expiresIn: '1d' });

            //console.log(token, user)

            return res.json({ token, user });
        } catch (error) {
            // Log de erro pode ser adicionado aqui
            return res.status(500).json({ message: 'Erro ao realizar login.', error: error.message });
        }
    },

    // Método para logout
    logout: (req, res) => {
        req.logout();
        res.redirect('/');
    },

    register: async (req, res) => {
        console.log('Iniciando registro de usuário');
        const { username, email, password, dataNascimento, nomeResponsavel, telefone, emailResponsavel } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ message: 'Username, email e senha são obrigatórios.' });
        }

        try {
            // Criar um novo usuário
            await userRepository.createUser({
                username,
                email,
                password,
                dataNascimento,
                nomeResponsavel,
                telefone,
                emailResponsavel,
            });
            res.status(201).json({ message: 'Usuário registrado com sucesso!' });
        } catch (error) {
            console.error('Erro ao registrar usuário:', error);
            res.status(500).json({ message: 'Erro ao registrar usuário.' });
        }
    },

};
