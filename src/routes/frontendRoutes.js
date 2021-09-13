const express = require('express')
const router = express.Router()

//ROTEAR PARA LISTA DE PRODUTOS
router.get('/', (req, res) => {
    res.render('produtos')
})

//ROTEAR PARA NOVO PRODUTOS
router.get('/novo_produto', (req, res) => {
    res.render('novoProduto')
})

//ROTEAR PARA ALTERAÇÃO 
router.get('/alt_produto', (req, res) => {
    res.render('altProduto')
})

router.get('/login', (req, res) => {
    res.render('login')
})

router.get('/vender', (req,res) => {
    res.render('vender')
})

module.exports = router