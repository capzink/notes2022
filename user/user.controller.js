const User = require('./user.model')



const createUsers = (req, res) => {
  res.send("greate user");
};
const getAllUsers= (req,res)=>{
    res.send('get all users route')
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