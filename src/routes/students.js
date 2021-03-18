var express = require('express');
var router = express.Router();

var student_controller = require('../controllers/studentController');

// GET list of all students.
router.get('/', student_controller.student_list);

// GET detail for a specific student.
router.get('/:id', student_controller.student_detail);

// POST Handle student create.
router.post('/create', student_controller.student_create);

module.exports = router;
