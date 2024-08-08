const express = require('express')
const router = express.Router()
const passport = require('passport')

//Rota principal
router.get('/', (req, res) => {
    res.send('Home')
})

//Login
router.get('/login', (req, res) =>{
    res.send('Formulario de login')
})

router.post('/login', (req, res, next) =>{
    try{

    }catch(err){
        console.log('Erro: ', err);
    }

})
//Logout
router.get('/logout', (req, res, next) =>{

})

module.exports = router;