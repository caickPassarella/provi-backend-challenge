const express = require('express');
const router = express.Router();
const registerController = require('../services/register/registerController');

router.post('/', registerController.create);

module.exports = router;