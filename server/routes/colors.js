const express = require('express');
const router = express.Router();
const controllers = require('../controllers/colors.js');

router.get('/', controllers.getRandomColor);

module.exports = router;
