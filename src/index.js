const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require("express-handlebars").engine;
const app = express()

app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('combined'))
//handle bars
app.engine('hbs', handlebars({
  extname: '.hbs' // de viet tat
}));
app.set('view engine', 'hbs'); //dat web view engine la handlebar
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/trang-chu-moi', function (req, res) {
  res.render('home');
  
})
app.get('/news', function (req, res) {
  res.render('news');
  
})

app.listen(3000)