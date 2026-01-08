const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../utils/config');
    


const auth = {
    checkauth: function (req, res, next) {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        // verify the token
        jwt.verify(token, SECRET_KEY, (err, User) => {
            if (err) {
                return res.status(401).json({ message: 'Invalid token' });
            }
            req.Userid = User.id;
            next();
        });                 
    },
}
module.exports = auth;