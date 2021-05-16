var express = require('express');
var router = express.Router();
var authenticateJWT = require('../../helpers/authenticateJWT');

var staff_controller = require('./staff.controller');

// GET list of all staffs.
router.get('/', authenticateJWT, staff_controller.staff_list);

// GET detail for a specific staff.
router.get('/:id', authenticateJWT, staff_controller.staff_detail);

// POST Handle staff create.
router.post('/create', authenticateJWT, staff_controller.staff_create);

// PUT Handle staff update.
router.put('/update/:id', authenticateJWT, staff_controller.staff_update);

// DELETE Handle staff remove.
router.delete('/delete/:id', authenticateJWT, staff_controller.staff_delete);

module.exports = router;