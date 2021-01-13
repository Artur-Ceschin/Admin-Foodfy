const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const content = require('./data')

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server
})

server.get('/', function (req, res) {
    return res.render('index', {items : content})
})

server.get('/about', function (req, res) {
    return res.render('about')
})

server.get('/recipies', function (req, res) {
    return res.render('recipies', {items : content})
})

server.get('/recipie-content/:id', function (req, res) {
    const recipeIndex = req.params.id;
    return res.render('recipie-content', {recipie : content[recipeIndex]})
})


server.listen(5000, ()=> {
    console.log("Server is running")
})