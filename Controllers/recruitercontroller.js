const jobModel = require('../models/job');
const companyModel = require('../models/Company');
const recruitercontroller = {
    createjob: async (req, res) => {
        try {
            const { title, description } = req.body;
            const company = await companyModel.findOne({ recruiter: req.userid });
            if (!company) {
                return res.status(404).json({ message: 'Company not found for this recruiter' });
            }
            const newjob = await jobModel.create({
                title,
                description,
                postedby: req.userid,
                company: company._id
            });
            await newjob.save();
            company.jobs.push(newjob._id);
            await company.save();

            res.status(201).json({ message: "Job created successfully" });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    viewalljobs: async (req, res) => {
        try {
            const jobs = await jobModel.find({ postedby: req.userid }).populate('company');
            res.status(200).json(jobs);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    updatejob: async (req, res) => {
        try {
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    deletejob: async (req, res) => {
        try {
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    viewapplications: async (req, res) => {
        try {
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    viewprofile: async (req, res) => {
        try {
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

};
module.exports = recruitercontroller;