var jwt = require('jsonwebtoken');

const createToken =(UserData)=>{
    return jwt.sign(UserData,process.env.JWT_SECRET)
}

module.exports={createToken}