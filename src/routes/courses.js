const express = require('express');
const router = express.Router();
const coursesController = require('../app/controllers/CourseController');

router.use('/create', coursesController.create);
router.post('/store', coursesController.store);
router.use('/:slug', coursesController.show);

module.exports = router;
