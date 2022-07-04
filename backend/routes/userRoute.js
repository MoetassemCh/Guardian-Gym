const express = require("express");
const passport=require("passport")
router = express.Router(),
  // verifyToken = require("../middleware/authJwt"),
  { signup_get,signup,signin_get ,
    signin,logout } 
  = require("../controllers/authController");


router.get("/register", signup_get, function (req, res) {});
router.post("/register", signup, function (req, res) {});
router.get("/login", signin_get, function (req, res) {});
router.post("/login", signin, function (req, res) {});
router.get("/logout",logout, function (req, res) {});

// router.get(
//   "/google",
//   passport.authenticate("google", {
//     scope: ["profile"],
//   })
// );
// router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
//   res.redirect('/profile');
// });

module.exports = router;





