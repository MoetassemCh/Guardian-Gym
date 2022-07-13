const User = require("../../GYMModules/usersSchema");
const mongoose = require("mongoose");

const getProfile = async (req, res) => {
  const profile = await User.findById(req.user._id).select("-password");
  res.send(profile);
};

const updateProfile = async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    user.name = req.body.name;
    user.email = req.body.email;
    user.gender = req.body.gender;
    user.address.country = req.body.country;
    const updateUser = await user.save();
    res.json({
      name: updateUser.name || user.name,
      email: updateUser.email || user.email,
      gender: updateUser.gender || user.gender,
      country: updateUser.address.country || user.address.country,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
};

module.exports = {
  getProfile,
  updateProfile,
};
