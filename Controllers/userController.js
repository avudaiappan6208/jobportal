const User = require('../models/Users');

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