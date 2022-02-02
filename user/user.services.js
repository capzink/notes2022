
const User = require('./user.model')

const getUserbyEmail= async (email)=>{
    try{
        const user = await User.findOne({email})
        return user
    }catch(error){
        console.log(error);
    }
}

// const hasRole = async(req,res, next, role)=>{
//     console.log(req,res,role);
//     next()

// }

module.exports = { getUserbyEmail};