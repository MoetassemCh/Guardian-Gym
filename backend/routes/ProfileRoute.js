const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Router = require("express").Router();
const auth = require("../middleware/authJwt");
const ProfileRouter = Router;
const User = require("../GYMModules/usersSchema");



ProfileRouter.get('/',auth,async(req,res)=>{
const profile=await User.findById(req.user._id).select('-password')
res.send(profile)
})

module.exports = ProfileRouter;
















// profile
// exercises
// about
// home 
// login 
// register
// dashboard(add product ,dash,profile,review,)