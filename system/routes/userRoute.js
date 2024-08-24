const express = require('express')
const router = express.Router()
const passport = require('passport')


router.post('/login', (req, res, next) =>{
    try{

    }catch(err){
        console.log('Erro: ', err);
    }

})
//Logout
router.get('/logout', (req, res, next) =>{
    res.redirect('/homepage');
})

module.exports = router;