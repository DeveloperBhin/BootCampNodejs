const mysql = require('mysql2');
const dontenv = require('dotenv')

dontenv.config();


const config = mysql.createConnection({
    database: process.env.DB_NAME,
    user:process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    // port : process.env.DB_PORT,
    host:process.env.DB_HOST
})

config.connect((error) => {
    if(error){
        console.log('Database connection faile:',error);
    }
    else{
        console.log('Database connected succesfully');
    }
}
);

module.exports = config;