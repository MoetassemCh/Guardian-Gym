const jwt = require("jsonwebtoken");
const User = require("../GYMModules/usersSchema"); 
const authco=require("../controllers/authController")

module.exports=function (req,res,next){
const token = req.cookies.jwt;
  if(token){
 jwt.verify(token, "privateKey", (err, decodeToken)=>{
  if (err) {
  console.log(err.message);
 res.redirect("/auth/login");
  } else{ 
       req.user = decodeToken;
      next();
      }
    });

  } else {
     res.status(401).send("access rejected..");
      // res.redirect("/auth/login");
  }
};


























