const express = require('express');
const router = express.Router();

const auth_controller = require('../controllers/auth.controller');
const user_controller = require('../controllers/user.controller');

router.post('/login', auth_controller.login);
router.post('/register', user_controller.create);

module.exports = router;