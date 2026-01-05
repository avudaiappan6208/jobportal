require('dotenv').config();

const Mongodb_URI = process.env.Mongodb_URI;
const PORT = process.env.PORT || 3002;

module.exports={
    Mongodb_URI,
    PORT
}