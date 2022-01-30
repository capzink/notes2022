const express = require("express");
const router = express.Router();
const { createNote } = require("./notes.controller");

router.route("/").get().post(createNote);
router.route("/:id").get().delete().patch();
router.route("/user/notes/:noteid").get().post().patch().delete();

module.exports = router;
