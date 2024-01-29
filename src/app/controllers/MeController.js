const Course = require('../models/Course');
const mongooseUtil = require('../../util/mongoose'); // Import the entire module
const { multipleMongooseToObject } = mongooseUtil; // Use the specific property
class MeController {
  //[GET] /me/stored/courses
  storedCourses(req, res, next) {
    Course.find({})
      .then((courses) => {
        res.render('me/stored-courses', { courses: multipleMongooseToObject(courses) });
      })
      .catch((err) => {
        next(err);
      });
  }

  search(req, res) {
    res.render('search');
  }
  
}

module.exports = new MeController();
