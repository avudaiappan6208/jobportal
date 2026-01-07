const express = require('express');
const authController = require('../Controllers/authController');
const authrouter = express.Router();
authrouter.post('/register',authController.register)

module.exports = authrouter;