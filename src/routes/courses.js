const express = require('express');
const router = express.Router();
const coursesController = require('../app/controllers/CourseController');

router.use('/create', coursesController.create);
router.post('/store', coursesController.store);
router.get('/:id/edit', coursesController.edit);
router.post('/handle-form-actions', coursesController.handleFormActions);
router.put('/:id', coursesController.update);
//thêm restore để khẳng định là phương thức này để khôi phục
router.patch('/:id/restore', coursesController.restore);
router.delete('/:id', coursesController.delete);
router.delete('/:id/force', coursesController.forceDelete);
router.use('/:slug', coursesController.show);
module.exports = router;
