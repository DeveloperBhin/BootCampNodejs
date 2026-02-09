//userModels
const config = require('../config/database');

//create user
const createUser = (name,email,callback) => {
    //insert into database
    config.query(
        'INSERT INTO users (name,email) VALUES ( ?, ?)',
        
        [name,email],callback);
}

//fetch all users
const getAllUsers = (callback) => {
    //fetch from database
    config.query('SELECT * FROM users',callback);

}

//exporting models
module.exports = {
    createUser,
    getAllUsers
}