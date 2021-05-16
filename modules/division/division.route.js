var express = require('express');
var router = express.Router();
var authenticateJWT = require('../../helpers/authenticateJWT');
var division_controller = require('./division.controller');

// GET list of all divisions.
router.get('/', authenticateJWT, division_controller.division_list);

// GET detail for a specific division.
router.get('/:id', authenticateJWT, division_controller.division_detail);

// POST Handle division create.
router.post('/create', authenticateJWT, division_controller.division_create);

// PUT Handle division update.
router.put('/update/:id', authenticateJWT, division_controller.division_update);

// DELETE Handle division remove.
router.delete('/delete/:id', authenticateJWT, division_controller.division_delete);

module.exports = router;
