const { json } = require('express/lib/response');
const User = require('./user.model')



const createUsers = async (req, res) => {
  try {
    const user = await User.create(req.body)
    res.status(200).json('user created')
    
  } catch (error) {
    res.status(400).json('something went wrong we cannot create user') 
  }
};
const getAllUsers= async(req,res)=>{
  try {
    const users = await User.find({})
    if(!users){
      res.status(500).json('there a no users in data base')
    }
    res.status(200).json({ users });
  } catch (error) {
    res.status(400).json("something went wrong");  
  }
  
   
}
const getUser = (req, res) => {
  res.send("get a user");
};
const updateUser = (req, res) => {
  res.send("update user route");
};
const deleteUsers = (req, res) => {
  res.send("delete a user route");
};

const login = (req, res) => {
  res.send("login route");
};

module.exports = {
  createUsers,
  getAllUsers,
  getUser,
  updateUser,
  deleteUsers,
  login
};