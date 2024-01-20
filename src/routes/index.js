const newsRouter = require('./news');
function routes(app) {
  app.get('/', function (req, res) {
    res.render('home');
  });
  app.use('/news', newsRouter);
  app.get('/search', function (req, res) {
    // console.log(req.query);
    res.render('search');
  });
  app.post('/search', function (req, res) {
    console.log(req.body);
    res.render('search');
  });
}
module.exports = routes;
