const Recruiter = require('../models/Recruiter');
const User = require('../models/User');
const Company = require('../models/Company');
const Job = require('../models/Job');

const adminController = {
    createrecruiter: async (req, res) => {
        try {

        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    updaterecruiter: async (req, res) => {
        try {
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    deleterecruiter: async (req, res) => {
        try {

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