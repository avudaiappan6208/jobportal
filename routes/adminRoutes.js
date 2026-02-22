const express = require('express');
const auth = require('../middlewares/auth');
const adminController = require('../Controllers/adminControllers');
const adminrouter = express.Router();
// manage recruiters
adminrouter.post('/recruiters', auth.checkauth,auth.allowrules(['admin']),adminController.createrecruiter);
adminrouter.put('/recruiters/:id',auth.checkauth,auth.allowrules(['admin']),adminController.updaterecruiter);
adminrouter.delete('/recruiters/:id',auth.checkauth,auth.allowrules(['admin']),adminController.deleterecruiter);
// manage companies
adminrouter.post('/companies',auth.checkauth,auth.allowrules(['admin']),adminController.createcompany);
adminrouter.put('/companies/:id',auth.checkauth,auth.allowrules(['admin']),adminController.updatecompany);
adminrouter.delete('/companies/:id',auth.checkauth,auth.allowrules(['admin']),adminController.deletecompany);
// assign and remove recruiters
adminrouter.put('/companies/:companyid/assignrecruiter/:recruitersid',auth.checkauth,auth.allowrules(['admin']),adminController.assignrecruiter);
adminrouter.delete('/companies/:companyid/removerecruiter/:recruitersid',auth.checkauth,auth.allowrules(['admin']),adminController.removerecruiter);
// manage jobs
// adminrouter.post('/jobs',auth.checkauth,auth.allowrules(['admin']),adminController.createjob);
// adminrouter.put('/jobs/:id',auth.checkauth,auth.allowrules(['admin']),adminController.updatejob);
// adminrouter.delete('/jobs/:id',auth.checkauth,auth.allowrules(['admin']),adminController.deletejob);
// adminrouter.get('/jobs',auth.checkauth,auth.allowrules(['admin']),adminController.viewalljobs);
// // manage users
// adminrouter.get('/users',auth.checkauth,auth.allowrules(['admin']),adminController.viewallusers);
// adminrouter.put('/users',auth.checkauth,auth.allowrules(['admin']),adminController.updateuser);
// adminrouter.delete('/users',auth.checkauth,auth.allowrules(['admin']),adminController.deleteuser);
module.exports = adminrouter;