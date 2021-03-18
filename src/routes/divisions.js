var express = require('express');
var router = express.Router();

var division_controller = require('../controllers/divisionController');

// GET list of all divisions.
router.get('/', division_controller.division_list);

// GET detail for a specific division.
router.get('/:id', division_controller.division_detail);

// POST Handle division create.
router.post('/create', division_controller.division_create);

module.exports = router;
