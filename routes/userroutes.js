const express = require('express');
const  userController = require('../Controllers/userController');
const auth = require('../middlewares/auth')


const userrouter = express.Router();
userrouter.get('/profile',auth.checkauth,auth.allowrules(['user','admin','recruiter']), userController.getprofile);
userrouter.put('/profile',auth.checkauth,auth.allowrules(['user']), userController.updateprofile);
userrouter.delete('/profile',auth.checkauth,auth.allowrules(['user']), userController.deleteprofile);
userrouter.post('/apply/:jobid', auth.checkauth,auth.allowrules(['user']), userController.applyjob);
userrouter.get('/applications', auth.checkauth,auth.allowrules(['user']), userController.viewmyapplications);
module.exports = userrouter;