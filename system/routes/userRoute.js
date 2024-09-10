const express = require('express');
const router = express.Router();
const passport = require('passport');
const userController = require('../controllers/userController');

// Rotas de cadastro e login
//http://localhost:5000/api/register
router.post('/register', userController.register);


//http://localhost:5000/api/login
router.post('/login', userController.login);

// Rota para logout
router.post('/logout', userController.logout);

// Rota para autenticação via Google
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/auth/google/callback', passport.authenticate('google', { session: false }), (req, res) => {
    const token = req.user.token;
    res.json({ token });
});

// Rota para autenticação via Facebook
router.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email'] }));

router.get('/auth/facebook/callback', passport.authenticate('facebook', { session: false }), (req, res) => {
    const token = req.user.token;
    res.json({ token });
});

module.exports = router;