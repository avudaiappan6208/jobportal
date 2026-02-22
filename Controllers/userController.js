const User = require('../models/Users');
const Job = require('../models/job');
const userController = {
    getprofile: async (req, res) => {
        try {
            const userId = req.Userid;
            const user = await User.findById(userId);
            res.status(200).json({ profile: user });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    updateprofile: async (req, res) => {
        try {
            const userId = req.Userid;
            const { name, email } = req.body;
            const updatedProfile = await User.findByIdAndUpdate(userId, { name, email }, { new: true });
            res.status(200).json({ profile: updatedProfile });

        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    deleteprofile: async (req, res) => {
        try {
            const userId = req.params.id;
            await User.findByIdAndDelete(userId);
            res.clearCookie('token');

            res.status(200).json({ message: 'User profile deleted successfully' });

        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    applyjob: async (req, res) => {
        try {
            const jobid = req.params.jobid;
            const userId = req.Userid;
            const job = await Job.findById(jobid);
            if(job.applicants.includes(userId)){
                return res.status(400).json({ message: 'You have already applied for this job' });
            }
            job.applicants.push(userId);
            await job.save();
            res.status(200).json({ message: 'Job applied successfully' });
        } catch (error) {
           
            res.status(500).json({ message: error.message });
        }
    },
    viewmyapplications: async (req, res) => {
        try {
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};
module.exports = userController;