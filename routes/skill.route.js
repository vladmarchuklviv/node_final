const express = require('express');
const router = express.Router();

const skill_controller = require('../controllers/skill.controller');

router.get('/all', skill_controller.all);
router.post('/create', skill_controller.create);
router.get('/:id', skill_controller.get);
router.put('/:id/update', skill_controller.update);
router.delete('/:id/delete', skill_controller.delete);


module.exports = router;
