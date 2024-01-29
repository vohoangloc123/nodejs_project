const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars').engine;
const app = express();
const db = require('./config/db');
//cho phương thức put
const methodOverride = require('method-override')
//conectDB
db.connect();

const route = require('./routes');


app.use(express.static(path.join(__dirname, 'public')));
app.use(
  express.urlencoded({
    extended: true,
  }),
); //dung de lay du lieu tu form
// app.use(morgan('combined'))
//handle bars
app.use(express.json());
//cho phương thức put
app.use(methodOverride('_method'))
app.engine(
  'hbs',
  handlebars({
    extname: '.hbs',
    helpers: {
      sum: function(a, b) {
        return a + b;
      }
    }
  })  
);

app.set('view engine', 'hbs'); //dat web view engine la handlebar
app.set('views', path.join(__dirname, 'resources', 'views'));
//home, search, contact

//route init
route(app);
app.listen(3000);
