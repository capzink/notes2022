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
    res.status(200).json({ users });
  } catch (error) {
    res.status(400).json("there a no users in data base");  
  }
}
const getUser = async (req, res) => {
  const {id:userId}=req.params
  try {
    const user = await User.findById({_id:userId})
     res.status(200).json({ user });
    
  } catch (error) {
      res.status(400).json("no user with that Id");  
    
  }
};
// const updateUser = (req, res) => {
//   res.send("update user route");
// };
const deleteUsers = async (req, res) => {
    const { id: userId } = req.params;
    try {
      const user = await User.findOneAndDelete({ _id: userId });
      res.status(200).json('user Deleted' );
    } catch (error) {
      res.status(400).json("no user with that Id");
    }
};
const login = async (req, res) => {
  const {email, password}=req.body
  if(!email || !password){
    res.status(400).json('need Email and Password')
  }
  const user =  await User.findOne({email})
  if(!email){
    res.status(500).json('email not found, pelase try a new one')
  }
    const isPasswordCorrect = await user.comparePassword(password);
    if (!isPasswordCorrect) {
      res.status(500).json("password is not valis");
    }
    res.status(200).json({user})

};

module.exports = {
  createUsers,
  getAllUsers,
  getUser,
  deleteUsers,
  login
};