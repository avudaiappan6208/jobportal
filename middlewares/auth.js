const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../utils/config');
const User = require('../models/Users')
    


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

allowrules:(roles)=>{
    return async (req,res,next)=>{
        const userid = req.Userid
        const user = await User.findById(userid);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        if (!roles.includes(user.role)) {
            return res.status(403).json({ message: 'Forbidden' });
        }
        next();
    }
}

}
module.exports = auth;