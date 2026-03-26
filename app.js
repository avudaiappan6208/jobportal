const express = require('express');
const app = express();
const cookieParser=require('cookie-parser');
const morgan = require('morgan');
const cors = require('cors');
const authrouter = require('./routes/authRoutes');
const userrouter = require('./routes/userroutes');
const adminrouter = require('./routes/adminRoutes');
const recruiterrouter = require('./routes/Recruiterroutes');

app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true,   
}));

app.use('/api/v1/auth', authrouter)
app.use('/api/v1/user', userrouter)
app.use('/api/v1/admin', adminrouter)
app.use('/api/v1/recruiter',recruiterrouter)
module.exports = app;