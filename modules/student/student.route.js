var express = require('express');
var router = express.Router();
var authenticateJWT = require('../../helpers/authenticateJWT');

var student_controller = require('./student.controller');

// GET list of all students.
router.get('/', authenticateJWT, student_controller.student_list);

// GET detail for a specific student.
router.get('/:id', authenticateJWT, student_controller.student_detail);

// POST Handle student create.
router.post('/create', authenticateJWT, student_controller.student_create);

// PUT Handle student update.
router.put('/update/:id', authenticateJWT, student_controller.student_update);

// DELETE Handle student remove.
router.delete('/delete/:id', authenticateJWT, student_controller.student_delete);

module.exports = router;
