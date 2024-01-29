const express = require('express');
const router = express.Router();
const coursesController = require('../app/controllers/CourseController');


router.use('/create', coursesController.create);
router.post('/store', coursesController.store);
router.get('/:id/edit', coursesController.edit);
router.put('/:id', coursesController.update);
router.delete('/:id', coursesController.delete);
router.use('/:slug', coursesController.show);

module.exports = router;