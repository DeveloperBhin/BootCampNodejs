//app.js
//main application file
//iporting express and dotenv
const express = require('express');
const app = express();
require('dotenv').config();
require('./config/database'); // connect DB
//importing routes
const userRoutes = require('./routes/UserRoute')

//middleware
app.use(express.json());
//routes
app.use('/users',userRoutes)

module.exports = app;
