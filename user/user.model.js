const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please add a Name"],
    trim: true,
    lowerCase: true,
    minlength: 4,
  },
  lastName: {
    type: String,
    required: [true, "Please add a Lastname"],
    trim: true,
    lowerCase: true,
  },
  email: {
    type: String,
    trim: true,
    required: [true, "Please add an Email"],
    lowerCase: true,
  },
  password: {
    type: String,
    required: true["Please add a password"],
    minLength: 6,
  },
});

module.exports = mongoose.model('User', userSchema)