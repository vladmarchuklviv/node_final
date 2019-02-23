const express = require('express');
const router = express.Router();

const position_controller = require('../controllers/position.controller');

router.get('/all', position_controller.all);
router.post('/create', position_controller.create);
router.get('/:id', position_controller.get);
router.put('/:id/update', position_controller.update);
router.delete('/:id/delete', position_controller.delete);


module.exports = router;
