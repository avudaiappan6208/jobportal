require('dotenv').config();

const Mongodb_URI = process.env.Mongodb_URI;
const PORT = process.env.PORT || 3002;
const SECRET_KEY = process.env.SECRET_KEY;
module.exports={
    Mongodb_URI,
    PORT,
    SECRET_KEY
}