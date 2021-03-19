var express = require('express');
var router = express.Router();

var staff_controller = require('../controllers/staff.controller');

// GET list of all staffs.
router.get('/', staff_controller.staff_list);

// GET detail for a specific staff.
router.get('/:id', staff_controller.staff_detail);

// POST Handle staff create.
router.post('/create', staff_controller.staff_create);

// PUT Handle staff update.
router.put('/update/:id', staff_controller.staff_update);

// DELETE Handle staff remove.
router.delete('/delete/:id', staff_controller.staff_delete);

module.exports = router;