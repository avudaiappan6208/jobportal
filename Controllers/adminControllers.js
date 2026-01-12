const User = require('../models/Users');
const bcrypt = require('bcrypt');
const adminController = {
    createrecruiter: async (req, res) => {
        try {
            const { name, email, password, role } = req.body;
            const newRecruiter = await User.findOne({ email });
            if (newRecruiter) {
                return res.status(400).json({ message: 'Recruiter already exists' });
            }
            const hashedPassword = await bcrypt.hash(password, 10);
            const recruiter = new User
                ({
                    name,
                    email,
                    password: hashedPassword,
                    role
                });
            await recruiter.save();
            res.status(201).json({ message: 'Recruiter created successfully', recruiter });

        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    updaterecruiter: async (req, res) => {
        try {
            const { name, email, password } = req.body;
            const { id } = req.params;
            const recruiter = await User.findById(id);
            if (!recruiter) {
                return res.status(404).json({ message: 'Recruiter not found' });
            }
            await User.findByIdAndUpdate(id, { name, email, password });
            res.status(200).json({ message: 'Recruiter updated successfully', updatedRecruiter });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    deleterecruiter: async (req, res) => {
        try {
            const { id } = req.params;
            const recruiter = await User.findById(id);
            if (!recruiter) {
                return res.status(404).json({ message: 'Recruiter not found' });
            }
            await User.findByIdAndDelete(id);
            res.status(200).json({ message: 'Recruiter deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    createcompany: async (req, res) => {
        try {

        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    updatecompany: async (req, res) => {
        try {
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    deletecompany: async (req, res) => {
        try {
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    assignrecruiter: async (req, res) => {
        try {
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    removerecruiter: async (req, res) => {
        try {
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    createjob: async (req, res) => {
        try {

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
    viewalljobs: async (req, res) => {
        try {

        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    viewallusers: async (req, res) => {
        try {

        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    updateuser: async (req, res) => {
        try {

        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    deleteuser: async (req, res) => {
        try {
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
};
module.exports = adminController;