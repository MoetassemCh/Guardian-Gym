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
      pic:user.pic,
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
    Age: user.Age,
    phoneNumber: user.phoneNumber,
    country: user.country,
    city: user.city,
    street: user.street,
    pic:user.pic
  });
} else {
   res.status(404).send({
     message: "User not found",
   });
}
});


exports.Updateprofile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.Age = req.body.Age || user.Age;
    user.phoneNumber = req.body.phoneNumber || user.phoneNumber;
    user.country = req.body.country || user.country;
    user.city = req.body.city || user.city;
    user.street = req.body.street || user.street;
    user.pic = req.body.pic || user.pic;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      Age: updatedUser.Age,
      phoneNumber: updatedUser.phoneNumber,
      country: updatedUser.country,
      city: updatedUser.city,
      street: updatedUser.street,
      pic: updatedUser.pic,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});
