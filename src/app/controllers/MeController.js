const Course = require('../models/Course');
const mongooseUtil = require('../../util/mongoose'); // Import the entire module
const { multipleMongooseToObject } = mongooseUtil; // Use the specific property
class MeController {
  //[GET] /me/stored/courses
  storedCourses(req, res, next) {
    Promise.all([Course.find({}), Course.countDocumentsWithDeleted({ deleted: true })]).then(([courses, deleteCount]) => {
      console.log(deleteCount);
      res.render('me/stored-courses', { deleteCount, courses: multipleMongooseToObject(courses) });
    }
    ).catch(next);

    // Course.countDocumentsDeleted()
    // .then((deleteCount) => {
    //   console.log(deleteCount);
    // }).catch(next);

    // Course.find({})
    //   .then((courses) => {
    //     res.render('me/stored-courses', { courses: multipleMongooseToObject(courses) });
    //   })
    //   .catch((err) => {
    //     next(err);
    //   });
  }

  search(req, res) {
    res.render('search');
  }
  trashCourses(req, res, next) {
    Course.findWithDeleted({ deleted: true })
        .then((courses) => {
            res.render('me/trash-courses', { courses: multipleMongooseToObject(courses) });
        })
        .catch((err) => {
            next(err);
        });
}


  
}

module.exports = new MeController();
