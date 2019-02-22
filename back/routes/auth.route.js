const express = require('express');
const router = express.Router();

const auth_controller = require('../controllers/auth.controller');

router.get('/test', auth_controller.test);
router.post('/login', auth_controller.login);

module.exports = router;