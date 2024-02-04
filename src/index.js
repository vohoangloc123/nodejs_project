const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars').engine;
const app = express();
const db = require('./config/db');
// const User=require('./firebase/config');
//cho phương thức put
const methodOverride = require('method-override');
//route
const route = require('./routes');
//conectDB
db.connect();
//middle ware
const middleware = require('./app/middleware/SortMiddleware');


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
app.use(methodOverride('_method'));
//custom middleware
app.use(middleware);
app.engine(
  'hbs',
  handlebars({
    extname: '.hbs',
    helpers: {
      sum: function (a, b) {
        return a + b;
      },
      sortable: (field, sort) => {
        const sortType = field === sort.column ? sort.type : 'default';
        const icons = {
            default: 'oi oi-elevator',
            asc: 'oi oi-sort-ascending',
            desc: 'oi oi-sort-descending'
        };
        const types ={
            default: 'desc',
            asc: 'desc',
            desc: 'asc'
        }
        const iconClass = icons[sortType];
        const typesClass = types[sortType];
        return `<a href="?_sort&column=${field}&type=${typesClass}">
                    <span class="${iconClass}"></span>
                </a>`;
    }    
    },
  }),
);
app.get('/middleware', 
  function (req, res, next) {
    if(['vethuong', 'vevip'].includes(req.query.ve)){
        return next();
    }
    res.status(403).json({message: 'Access denied'});
},
  function(req, res, next){
    res.json({message: 'Access granted'});
  }
);
app.set('view engine', 'hbs'); //dat web view engine la handlebar
app.set('views', path.join(__dirname, 'resources', 'views'));
//home, search, contact

//route init
route(app);
app.listen(3000);
