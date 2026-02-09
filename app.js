const express = require('express');
const app = express();
require('dotenv').config();
require('./config/database'); // connect DB

const userRoutes = require('./routes/UserRoute')

app.use(express.json());
app.use('/users',userRoutes)

module.exports = app;
