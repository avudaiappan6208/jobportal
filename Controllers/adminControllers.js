const User = require('../models/Users');
const Company = require('../models/Company');
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
            const updatedRecruiter = await User.findByIdAndUpdate(id, { name, email, password }, { new: true });
            
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
            // get the details of the company from req.body
            const { name, location } = req.body;
            const existingCompany = await Company.findOne({ name });
            if (existingCompany) {
                return res.status(400).json({ message: 'Company already exists' });
            }
            const newCompany = new Company({
                name,
                location
            });
            await newCompany.save();
            res.status(201).json({ message: 'Company created successfully', company: newCompany });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    updatecompany: async (req, res) => {
        try {
            const { name, location } = req.body;
            const existingCompany = await Company.findById(req.params.id);
            if (!existingCompany) {
                return res.status(404).json({ message: 'Company not found' });
            }
            const { id } = req.params;
            const updatedCompany = await Company.findByIdAndUpdate(id, { name, location }, { new: true });
            if (!updatedCompany) {
                return res.status(404).json({ message: 'Company not found' });
            }
            res.status(200).json({ message: 'Company updated successfully', company: updatedCompany });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    deletecompany: async (req, res) => {
        try {
            const { id } = req.params;
            const company = await Company.findById(id);
            if (!company) {
                return res.status(404).json({ message: 'Company not found' });
            }
            await Company.findByIdAndDelete(id);
            res.status(200).json({ message: 'Company deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    assignrecruiter: async (req, res) => {
        try {
            const { companyid, recruitersid } = req.params;
            const company = await Company.findById(companyid);
            if (!company) {
                return res.status(404).json({ message: 'Company not found' });
            }
            const recruiter = await User.findById(recruitersid);
            if (!recruiter) {
                return res.status(404).json({ message: 'Recruiter not found' });
            }
           await company.recruiters.push(recruitersid);
            await company.save();
            res.status(200).json({ message: 'Recruiter assigned to company successfully', company });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    removerecruiter: async (req, res) => {
        try {
            const { companyid, recruitersid } = req.params;
            const company = await Company.findById(companyid);
            if (!company) {
                return res.status(404).json({ message: 'Company not found' });
            }
            const recruiter = await User.findById(recruitersid);
          if(!recruiter) {
            return res.status(404).json({message: 'Recruiter not found'});
            }
           await Company.findByIdAndUpdate(companyid, {recruiter:null});
            res.status(200).json({ message: 'Recruiter removed from company successfully',Company });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    // createjob: async (req, res) => {
    //     try {

    //     } catch (error) {
    //         res.status(500).json({ message: error.message });
    //     }
    // },
    // updatejob: async (req, res) => {
    //     try {
    //     } catch (error) {
    //         res.status(500).json({ message: error.message });
    //     }
    // },
    // deletejob: async (req, res) => {
    //     try {
    //     } catch (error) {
    //         res.status(500).json({ message: error.message });
    //     }
    // },
    // viewalljobs: async (req, res) => {
    //     try {

    //     } catch (error) {
    //         res.status(500).json({ message: error.message });
    //     }
    // },
    // viewallusers: async (req, res) => {
    //     try {

    //     } catch (error) {
    //         res.status(500).json({ message: error.message });
    //     }
    // },
    // updateuser: async (req, res) => {
    //     try {

    //     } catch (error) {
    //         res.status(500).json({ message: error.message });
    //     }
    // },
    // deleteuser: async (req, res) => {
    //     try {
    //     } catch (error) {
    //         res.status(500).json({ message: error.message });
    //     }
    // },
};
module.exports = adminController;