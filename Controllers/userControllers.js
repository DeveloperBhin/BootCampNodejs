const user = require('../Models/userModel');

//add user
const addUser = (req,res)=> {
    
    const {name,email} = req.body;
//validation
    if(!name || !email){
        return res.status().json({error:'Name and email are required'})
    }
    else{
        //insert into database
    user.createUser({name,email}, (err,message) => {
        if(err){
            //handle error
            res.status(500).json({error:'Failed to add user'})
        }
        //success
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
            //handle error
            res.status(500).json({error:'Failed to fetch users'})
        }
        else{
            //success
            res.status(200).json({user})
        }
    })
}

//exporting controllers
module.exports = {
    addUser,
    fetchUsers
}