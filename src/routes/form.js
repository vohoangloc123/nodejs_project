const express = require('express');
const router = express.Router();
const SignUpController = require('../app/controllers/SignUpController');

router.use('/signup', SignUpController.signUp);
module.exports = router;
