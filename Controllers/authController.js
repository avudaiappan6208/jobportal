const User = require('../models/Users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../utils/config');
const Users = require('../models/Users');


const authController = {
    register: async (req, res) => {
        try {
            const { name, email, password } = req.body;
            const newUser = await User.findOne({ email });
            if (newUser) {
                return res.status(400).json({ message: 'User already exists' });
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            const user = await User({ name, email, password: hashedPassword });
            await user.save();
            res.status(201).json({ message: 'User registered successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    login: async (req, res) => {
        try {
            const { email, password } = req.body;

            const user = await User.findOne({ email });
            if (!user) {
                return res.status(400).json({ message: 'User not found' });
            }
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({ message: 'Invalid credentials' });
            }
            const token = jwt.sign({ id: user._id }, SECRET_KEY);
            res.cookie('token', token, { httpOnly: true });
            res.json({ message: 'User logged in successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    logout: (req, res) => {
        try {
            res.clearCookie('token');
            res.json({ message: 'User logged out successfully' });

        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    me: async (req, res) => {
        try {
           const { Userid } = req;
          const user = await User.findById(Userid).select('-password, -__v');
          res.status(200).json({ user });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};
module.exports = authController;