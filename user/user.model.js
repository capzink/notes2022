const mongoose = require('mongoose')
const bycrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema(
  {
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
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please Provide an email",
      ],
      unique: true,
    },
    password: {
      type: String,
      required: true["Please add a password"],
      minLength: 6,
    },
    role: {
      type: String,
      default: "user",
      enum: ["user", "admin"],
      required: true,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);


userSchema.pre("save", async function (next) {
    try {
        const salt = await bycrypt.genSalt(10);
        this.password = await bycrypt.hash(this.password, salt);   
    } catch (error) {
        next(error)  
    }
});

userSchema.methods.createJWT = function (payload) {
  return jwt.sign(
    payload,
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_LIFETIME }
  );
};

userSchema.methods.comparePassword = async function (passwordcheck) {
  const isMatch = await bycrypt.compare(passwordcheck, this.password);
  return isMatch;
  
};

userSchema.virtual('profile').get(function(){
    const {firstName, email, role, _id:userId}= this
    return {description: `${firstName} con role ${role}`}
})



module.exports = mongoose.model('User', userSchema)