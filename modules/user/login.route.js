var express = require('express');
var router = express.Router();

var login_controller = require('./login.controller');

// POST list of all staffs.
router.post('/', login_controller.login);

module.exports = router;