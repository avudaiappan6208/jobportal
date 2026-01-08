const express = require('express');
const { checkauth } = require('../middlewares/auth');

const authController = require('../Controllers/authController');
const auth = require('../middlewares/auth');
const authrouter = express.Router();
authrouter.post('/register',authController.register)
authrouter.post('/login',authController.login)
authrouter.post('/logout',authController.logout)
authrouter.get('/me',auth.checkauth,authController.me)


module.exports = authrouter;