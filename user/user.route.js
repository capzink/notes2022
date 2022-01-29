const express = require('express')
const router = express.Router()
const {
  createUsers,
  getAllUsers,
  getUser,
  deleteUsers,  
  login
}=require('./user.controller')

router.route("/user").get(getAllUsers).post(createUsers);
router.route("/user/:id").delete(deleteUsers).get(getUser);
router.route('/login').post(login)


module.exports = router