const express = require("express");
const router = express.Router();
const {
  createNote,
  getAllNotes,
  getNote,
  deleteNote,
  updateNote,
  getNotebyUser,
} = require("./notes.controller");

const {
  isAuthenticated,
  getUserbyEmail,
  hasRole,
} = require("../auth/auth.services");
//const {hasRole} = require('../user/user.services')

router
  .route("/")
  .get(getAllNotes)
  .post(isAuthenticated,(req,res,next)=>hasRole(req,res,next,'admin'), createNote);
router
  .route("/:id")
  .get(getNote)
  .delete(deleteNote)
  .patch(updateNote);
router.route("/user/notes/:noteid").get(getNotebyUser)

module.exports = router;
