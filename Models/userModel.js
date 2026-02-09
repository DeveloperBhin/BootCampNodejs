const config = require('../config/database');

const createUser = (name,email,callback) => {
    config.query(
        'INSERT INTO users (name,email) VALUES ( ?, ?)',
        [name,email],callback);
}

const getAllUsers = (callback) => {
    config.query('SELECT * FROM users',callback);

}

module.exports = {
    createUser,
    getAllUsers
}