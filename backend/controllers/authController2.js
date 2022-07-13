const jwt = require("jsonwebtoken");
const generateToken = require("../config/token");
const User = require("../GYMModules/usersSchema");
const asyncHandler = require("express-async-handler");
const cookie = require("cookie-parser");



exports.signin = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

   

  if (user && (await user.matchPassword(password))) {
     res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
     res.status(404).send({
    message: "Invalid email or password",
  });
  }
};





exports.signup = async (req, res) => {
  const { name, email, password,
    gender,
    Age,
    phoneNumber,
      country,
      city,
      street  }= req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(404).send({
      message: "User already exists",
    });
  }

  const user = await User.create({
    name,
    email,
    password,
    gender,
    Age,
    phoneNumber,
      country,
      city,
      street
    
  });

  if (user) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(404).send({
      message: "Invalid user data",
    });
  }
};



exports.profile = asyncHandler(async (req, res) => {
const user = await User.findById(req.user._id);

if (user) {
  res.json({
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
  });
} else {
   res.status(404).send({
     message: "User not found",
   });
}
});