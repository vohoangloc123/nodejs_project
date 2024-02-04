const newsRouter = require('./news');
const signUpRouter = require('./form');
const siteRouter = require('./site');
const courseRouter = require('./courses');
const meRouter = require('./me');
function routes(app) {
  // app.use('/news', newsRouter)
  app.use('/me', meRouter);
  app.use('/', siteRouter);
  app.use('/courses', courseRouter);
  app.use('/form', signUpRouter);
}
module.exports = routes;