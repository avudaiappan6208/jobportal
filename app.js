const express = require('express');
const app = express();
const cookieParser=require('cookie-parser');
const morgan = require('morgan');
const cors = require('cors');
const authrouter = require('./routes/authRoutes');
const userrouter = require('./routes/userroutes');
app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));
app.use(cors({
    origin:'*',
    credentials:true,   
}));

app.use('/api/v1/auth', authrouter)
app.use('/api/v1/user', userrouter)
module.exports = app;