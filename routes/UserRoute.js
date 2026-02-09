const { addUser, fetchUsers } = require('../Controllers/userControllers');
const express = require('express');
const router = express.Router();

//route to add user
router.post('/AddUser',addUser);
//route to fetch users
router.get('/FetchUsers',fetchUsers)

module.exports = router;