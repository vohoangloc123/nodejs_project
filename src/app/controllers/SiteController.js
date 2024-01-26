const Course = require('../models/Course');
const mongooseUtil = require('../../util/mongoose'); // Import the entire module
const { multipleMongooseToObject } = mongooseUtil; // Use the specific property

class SiteController {
  index(req, res, next) {
    // res.render('home')
    Course.find({})
      .then((courses) => {
        res.render('home', { courses: multipleMongooseToObject(courses) });
      })
      .catch((err) => {
        next(err);
      });
  }
  search(req, res) {
    res.render('search');
  }
}
module.exports = new SiteController();
