const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

/*----- GET -----  */

//localhost:5000/api/users/login
router.get('/login', userController.login);

//localhost:5000/api/users/logout
router.get('/logout', userController.logout);

// Google Auth Routes
//localhost:5000/api/users/google
router.get('/google', userController.googleAuth);

//localhost:5000/api/users/google/callback
router.get('/google/callback', userController.googleCallback);

// Facebook Auth Routes
//localhost:5000/api/users/facebook
router.get('/facebook', userController.facebookAuth);

//localhost:5000/api/users/facebook/callback
router.get('/facebook/callback', userController.facebookCallback);

/*----- POST -----  */

module.exports = router;
