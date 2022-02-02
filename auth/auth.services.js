const jwt = require("jsonwebtoken");
const User = require("../user/user.model");

const getUserbyEmail = async (email) => {
  try {
    const user = await User.findOne({ email });
    return user;
  } catch (error) {
    console.log(error);
  }
};

const isAuthenticated = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(500).json({ msg: "No Token provided" });
  }
  const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await getUserbyEmail(decoded.email)   
    if(!user){
        return res.status(500).json({ msg: "Not authorized" });
    }
    req.user = user
    next();
};

const hasRole = (req,res,next,role)=>{
  console.log(req,res,next,role)
  next()
 
}

module.exports = { isAuthenticated, getUserbyEmail, hasRole };
