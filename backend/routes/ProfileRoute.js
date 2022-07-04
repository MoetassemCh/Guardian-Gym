const express = require("express");
const Router = require("express").Router();
const auth = require("../middleware/authJwt");
const ProfileRouter = Router;
const {
  getProfile,
  updateProfile,
} = require("../controllers/ProfileController");
const User = require("../GYMModules/usersSchema");


ProfileRouter.route("/").get(auth,getProfile).put(auth,updateProfile);





module.exports = ProfileRouter;













