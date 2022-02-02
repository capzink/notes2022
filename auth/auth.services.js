const jwt = require("jsonwebtoken");
const getUserbyEmail = require("../user/user.services");



const isAuthenticated = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(500).json({ msg: "No Token provided" });
  }

  const token = authHeader.split(" ")[1];


  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await getUserbyEmail(decoded.email)
    //console.log(user);
    if(!user){
        return res.status(500).json({ msg: "Not authorized" });
    }
    req.user = user
    next();
  } catch (error) {
     return res.status(500).json({ msg: "Not authorized" });
  }
};

module.exports = { isAuthenticated };
