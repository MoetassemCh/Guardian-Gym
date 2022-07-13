// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");
// const User = require("../GYMModules/usersSchema");
// const asyncHandler =require("express-async-handler")
// const cookie=require("cookie-parser")
// exports.signup_get = (req, res) => {
//   res.redirect("/");
// };

// exports.signin = asyncHandler(async (req, res) => {
//   const salt = await bcrypt.genSalt(10);
//   const hashedPassword = await bcrypt.hash(req.body.password, salt);

//   const { name, email, password } = req.body;


//   const userExists = await User.findOne({email });
//  if (userExists) {
//    res.status(400);
//    throw new Error("User already exists");
//  }
 
//    const user = new User({
//      name: req.body.name,
//      email: req.body.email,
//      password: hashedPassword,
//      isAdmin: req.body.isAdmin,
//    });
//   await user.save((err, user) => {

//     if (err) {
//       res.status(500).send({
//         message: "That usernmae is taken.Try another",
//       });
//       return;
//     } else {
//         const token = jwt.sign(
//           { _id: user._id, isAdmin: user.isAdmin },
//           "privateKey",
//           {
//             expiresIn: maxAge,
//           }
//         );
//         res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
//         res.status(200).send({
//         message: "User Registered successfully",
//       });
//     }
//   });
// });

// const maxAge = 3 * 24 * 60 * 60;

// exports.signin_get = (req, res) => {
  
//   res.redirect("/profile");
// };

// exports.signin = async (req, res) => {
//   try {
//     let user = await User.findOne({
//       email: req.body.email,
//     });
//     if (!user) {
//       return res.status(404).send("Invalid email or password");
//     }

//     const checkPassword = await bcrypt.compare(
//       req.body.password,
//       user.password
//     );
//     if (!checkPassword) {
//       return res.status(404).send("Invalid email or password");
//     }
//     const token = jwt.sign(
//       { _id: user._id, isAdmin: user.isAdmin },
//       "privateKey",
//       {
//         expiresIn: maxAge,
//       }
//     );
//     res.cookie("jwt", token, { httpOnly: true,maxAge:maxAge * 1000 });
   
//     res.status(201).json({ user: user._id });

//     // res.header("x-auth-token", token).status(200).send(token);

//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ message: "an error occured!" });
//   }

// };

// exports.logout = async (req, res) => {
//   try {
//     res.cookie("jwt", "", { maxAge: 1 });
//     res.status(200).send("You Successfully logout");
//   } catch (error) {
//     console.log(error);
//       return res.status(500).json({ message: "an error occured!" });
//   }
// };


