const express = require('express')
const app = express()
const path = require('path');

app.use(express.static('./src'));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs') 

const frontendRoutes = require('./routes/frontendRoutes')

app.use('/', frontendRoutes)

module.exports = app