// const jwt = require("jsonwebtoken");
// const User = require("../GYMModules/usersSchema"); 
// const authco=require("../controllers/authController")


// module.exports=function (req,res,next){
// const token = req.cookies.jwt;
//   if(token){
//  jwt.verify(token, "privateKey", (err, decodeToken)=>{
//   if (err) {
//   console.log(err.message);
//  res.redirect("/auth/login");
//   } else{ 
//        req.user = decodeToken;
//       next();
//       }
//     });

//   } else {
//      res.status(401).send("access rejected..");
//       // res.redirect("/auth/login");
//   }
// };

// const asyncHandler = require("express-async-handler");



// const auth = asyncHandler(async (req, res, next) => {
//   let token
//    if (
//     req.headers.authorization &&
//     req.headers.authorization.startsWith('Bearer')
//   ) {
//     try {
//       token = req.headers.authorization.split(' ')[1]

//       const decoded = jwt.verify(token, "privateKey");

//       req.user = await User.findById(decoded.id).select('-password')

//       next()
//     } catch (error) {
//       console.error(error)
//      res.status(401).send('Not authorized, token failed')
//     }
//   }

//   if (!token) {
//      res.status(401).send("access rejected..")
//   }

// });





// module.exports=auth;








// // module.exports=function (req,res,next){
// // const token = req.cookies.jwt;
// //   if(token){
// //  jwt.verify(token, "privateKey", (err, decodeToken)=>{
// //   if (err) {
// //   console.log(err.message);
// //  res.redirect("/auth/login");
// //   } else{ 
// //        req.user = decodeToken;
// // next();
// //       }
// //     });

// //   } else {
// //      res.status(401).send("access rejected..");
// //       // res.redirect("/auth/login");
// //   }
// // };
// >>>>>>> origin


























