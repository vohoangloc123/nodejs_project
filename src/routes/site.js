const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/SiteController');

router.get('/search', siteController.search);
router.get('/', siteController.index);
//tuyến đường gốc phải ở dưới cùng
module.exports = router;
