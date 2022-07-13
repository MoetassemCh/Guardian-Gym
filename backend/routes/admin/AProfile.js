const express = require("express");
const Router = require("express").Router();
const auth = require("../../middleware/authJwt");
const admin = require("../../middleware/admin");
const AdminProfile = Router;

const {
  getProfile,
  updateProfile,
} = require("../../controllers/admin/AProfileC");

const User = require("../../GYMModules/usersSchema");


AdminProfile.route("/").get([auth,admin], getProfile).put([auth,admin], updateProfile);



module.exports = AdminProfile;

