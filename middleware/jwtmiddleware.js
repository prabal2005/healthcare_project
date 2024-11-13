//first we are initializing jsonwebtoken module to use functionalities of jwt e.g:sign,verify

const jwt = require('jsonwebtoken');

//After successful register of user,and then calling the login endpoint with the already registered user,it will create and return JWT Token.

const createToken =(UserData)=>{
    return jwt.sign(UserData,process.env.JWT_SECRET,{expiresIn:400000});
}
//after login , we are getting token ,and for validating the jwt token that it is correct or not we will 
//proceed with secure routes to get/post/update/delete.

const validateJwtToken=(req,res,next)=>{
    //we are checking that token is available or not in request headers.
    const tokenCheck= req.headers.authorization;
    //option 1:req header token ,authorization not sent.
    if(!tokenCheck) return res.status(401).json({err:'Token not available'});

    //option 2:req header getting token:but not in a right format:
    //Authorization:BASIC /BEARER 
    //BASIC btoa(USERNAME:PASSWORD)->basic qwerty
    //BEARER rnfnnrwpnwrnbzxcgmjjrwspiu
    const token=req.headers.authorization.split(' ')[1];

    if(!token){
        return res.status(401).json
        ({err:'Invalid Token'});
    }
    try{
        const validateToken=jwt.verify(token,process.env.JWT_SECRET);

        req.user=validateToken;
        next();
    }catch(err){
        return res.status(401).json(err.message);
    }
}

module.exports={createToken,validatejwtToken};