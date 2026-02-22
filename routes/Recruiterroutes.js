const express = require('express');
const recruiterrouter = express.Router();
const auth = require('../middlewares/auth');
const recruiterController = require('../Controllers/recruitercontroller');
// manage jobs
recruiterrouter.post('/jobs',auth.checkauth,auth.allowrules(['recruiter']),recruiterController.createjob);
recruiterrouter.get('/jobs', auth.checkauth, auth.allowrules(['recruiter']), recruiterController.viewalljobs);
recruiterrouter.put('/jobs/:id',auth.checkauth,auth.allowrules(['recruiter']),recruiterController.updatejob);
recruiterrouter.delete('/jobs/:id',auth.checkauth,auth.allowrules(['recruiter']),recruiterController.deletejob);
recruiterrouter.get('/applications',auth.checkauth,auth.allowrules(['recruiter']),recruiterController.viewapplications);
recruiterrouter.get('/profile',auth.checkauth,auth.allowrules(['recruiter']),recruiterController.viewprofile);

module.exports = recruiterrouter;