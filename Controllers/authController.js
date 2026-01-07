const authController = {
    register: (req, res) => {
        try {
            res.json({ message: 'User registered successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    login: (req, res) => {
        try {
            res.send('User logged in');
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    logout: (req, res) => {
        try {
            res.send('User logged out');
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    me: (req, res) => {
        try {
            res.send('User profile');
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};
module.exports = authController;