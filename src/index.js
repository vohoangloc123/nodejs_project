const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars').engine
const app = express()

const route = require('./routes')

app.use(express.static(path.join(__dirname, 'public')))
app.use(
  express.urlencoded({
    extended: true,
  }),
) //dung de lay du lieu tu form
// app.use(morgan('combined'))
//handle bars
app.use(express.json())
app.engine(
  'hbs',
  handlebars({
    extname: '.hbs', // de viet tat
  }),
)

app.set('view engine', 'hbs') //dat web view engine la handlebar
app.set('views', path.join(__dirname, 'resources/views'))

route(app)
app.listen(3000)
