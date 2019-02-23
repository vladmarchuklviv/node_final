const express = require('express');
const router = express.Router();

const department_controller = require('../controllers/department.controller');

router.get('/all', department_controller.all);
router.post('/create', department_controller.create);
router.get('/:id', department_controller.get);
router.put('/:id/update', department_controller.update);
router.delete('/:id/delete', department_controller.delete);

module.exports = router;
