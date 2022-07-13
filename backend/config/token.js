const jwt = require("jsonwebtoken");




const generateToken = (id) => {
  return jwt.sign({ id }, "privateKey", {
    expiresIn: "30d",
  });
};



module.exports=generateToken;
