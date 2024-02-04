const Course = require('../models/Course');
const mongooseUtil = require('../../util/mongoose'); // Import the entire module
const { multipleMongooseToObject } = mongooseUtil; // Use the specific property
class MeController {
  //[GET] /me/stored/courses
  // storedCourses(req, res, next) {
  //   // res.json(res.locals._sort);
  //   let courseQuery=Course.find();
  //   if(req.query.hasOwnProperty('_sort'))
  //   {
  //     courseQuery=courseQuery.sort({
  //       [req.query.column]:req.query.type
  //     });
  //   }
  //   Promise.all([
  //     Course.find({}),
  //     Course.countDocumentsWithDeleted({ deleted: true }),
  //   ])
  //     .then(([courses, deleteCount]) => {
  //       console.log(deleteCount);
  //       res.render('me/stored-courses', {
  //         deleteCount,
  //         courses: multipleMongooseToObject(courses),
  //       });
  //     })
  //     .catch(next);

  //   // Course.countDocumentsDeleted()
  //   // .then((deleteCount) => {
  //   //   console.log(deleteCount);
  //   // }).catch(next);

  //   // Course.find({})
  //   //   .then((courses) => {
  //   //     res.render('me/stored-courses', { courses: multipleMongooseToObject(courses) });
  //   //   })
  //   //   .catch((err) => {
  //   //     next(err);
  //   //   });
  // }
  storedCourses(req, res, next) {
    let courseQuery = Course.find();

    if (req.query.hasOwnProperty('_sort')) {
        const sortOptions = {};
        sortOptions[req.query.column] = req.query.type;
        courseQuery = courseQuery.sort(sortOptions);
    }

    courseQuery.then(courses => {
        return Promise.all([
            courses,
            Course.countDocumentsWithDeleted({ deleted: true })
        ]);
    })
    .then(([courses, deleteCount]) => {
        console.log(deleteCount);
        res.render('me/stored-courses', {
            deleteCount,
            courses: multipleMongooseToObject(courses),
        });
    })
    .catch(error => {
        // Xử lý lỗi hoặc chuyển tiếp nếu có
        next(error);
    });
}
  search(req, res) {
    res.render('search');
  }
  trashCourses(req, res, next) {
    Course.findWithDeleted({ deleted: true })
      .then((courses) => {
        res.render('me/trash-courses', {
          courses: multipleMongooseToObject(courses),
        });
      })
      .catch((err) => {
        next(err);
      });
  }
}

module.exports = new MeController();
