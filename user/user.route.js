const express = require('express')
const router = express.Router()
const {
createUsers,
  getAllUsers,
  getUser,
  updateUser,
  deleteUsers,
  login
}=require('./user.controller')

router.route("/user").get();
router.route("/user:id").put().delete().get(getUser);
router.route('/login').post(login)


module.exports = router