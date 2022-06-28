const jwt = require("jsonwebtoken");
const User = require("../GYMModules/usersSchema"); 
const authco=require("../controllers/authController")

module.exports=function (req,res,next){
    const token =req.header('x-auth-token');
    if(!token)
    return res.status(401).send('access rejected..')
try{
const decodeToken=jwt.verify(token,'privateKey')
req.user=decodeToken
next()
}catch(e){
  res.status(400).send('wrong token..')
}
}


























