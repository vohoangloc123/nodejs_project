const Course = require('../models/Course');
const mongooseUtil = require('../../util/mongoose'); // Import the entire module
const { multipleMongooseToObject, mongooseToObject } = mongooseUtil;

class CourseController {
  //[GET] /courses/:slug
   show(req, res, next) {
    Course.findOne({ slug: req.params.slug }).then ((course) => {
        res.render('courses/show', { course: mongooseToObject(course) });
    }).catch(next);
  }
  //[GET] /courses/create
  create(req, res, next) {
    res.render('courses/create');
  }
  //[POST] /courses/stor
  store(req, res, next) {
    const formData=req.body;
    formData.image = `https://img.youtube.com/vi/${req.body.videoID}/sddefault.jpg`;
    const course = new Course(formData);
    course.save().then(() => res.redirect('/')).catch(error => {Console.log(error)});
  }
  //[GET] /courses/:id/edit
  edit(req, res, next) {
    Course.findById(req.params.id).then((course) => {
      res.render('courses/edit', { 
        course: mongooseToObject(course) });
    }).catch(next);
  }
  //[PUT] /course/:id
  update(req, res, next) {
      Course.updateOne({ _id: req.params.id }, req.body).then(() => res.redirect('/me/stored/courses')).catch(next);
  }
  //[DELETE] /course/:id
  delete(req, res, next) {
      Course.delete({ _id: req.params.id })
    .then(() => res.redirect('back'))
    .catch(next);
  }
  //[PATCH] /course/:id/restore
  restore(req, res, next) {
    Course.restore({ _id: req.params.id })
    .then(() => res.redirect('back'))
    .catch(next);
  }
  //[DELETE] /course/:id/force
  //deleteOne của mongo là xóa thật
  forceDelete(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
    .then(() => res.redirect('back'))
    .catch(next);
  }
  //[POST] /courses/handle-form-actions
  handleFormActions(req, res, next) {
    switch (req.body.action) {
      case 'delete':
        Course.delete({ _id: { $in: req.body.courseIds } })
        .then(() => res.redirect('back'))
        .catch(next);
        break;
      case 'restore':
        Course.restore({ _id: { $in: req.body.courseIds } })
        .then(() => res.redirect('back'))
        .catch(next);
        break;
      case 'force':
        Course.deleteMany({ _id: { $in: req.body.courseIds } })
        .then(() => res.redirect('back'))
        .catch(next);
        break;
      default:
        res.json({ message: 'Action is invalid' });
    }
  }

}
module.exports = new CourseController();
