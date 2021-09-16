const express = require('express')
const router = express.Router()

//ROTEAR PARA LISTA DE PRODUTOS
router.get('/', (req, res) => {
    res.render('home')
})

module.exports = router