//database.js
//database configuration and connection
//importing mysql and dotenv
const mysql = require('mysql2');
const dontenv = require('dotenv')

//load environment variables
dontenv.config();

//create connection
const config = mysql.createConnection({
    database: process.env.DB_NAME,
    user:process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    // port : process.env.DB_PORT,
    host:process.env.DB_HOST
})
//connect to database
config.connect((error) => {
    if(error){
        //handle error
        console.log('Database connection faile:',error);
    }
    else{
        //success
        console.log('Database connected succesfully');
    }
}
);

//exporting connection
module.exports = config;