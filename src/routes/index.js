const newsRouter = require('./news');
const siteRouter = require('./site');
const courseRouter = require('./courses');
const meRouter = require('./me');
function routes(app) {
  // app.use('/news', newsRouter)
  app.use('/me', meRouter);
  app.use('/', siteRouter);
  app.use('/courses', courseRouter);
}
module.exports = routes;
