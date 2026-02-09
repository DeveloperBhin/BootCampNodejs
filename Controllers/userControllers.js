const user = require('../Models/userModel');

//add user
const addUser = (req,res)=> {
    
    const {name,email} = req.body;

    if(!name || !email){
        return res.status().json({error:'Name and email are required'})
    }
    else{
        //insert into database
    user.createUser({name,email}, (err,message) => {
        if(err){
            res.status(500).json({error:'Failed to add user'})
        }
        else{
            res.status(200).json({message:"User added succesfully"});
        }
    })
    }
}

//fetch users
const fetchUsers = (req,res) =>{
    //fetch from datbase
    user.getAllUsers((err,user) =>{
        if(err){
            res.status(500).json({error:'Failed to fetch users'})
        }
        else{
            res.status(200).json({user})
        }
    })
}


module.exports = {
    addUser,
    fetchUsers
}