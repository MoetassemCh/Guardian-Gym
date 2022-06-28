const express = require("express");
const passport=require("passport")
router = express.Router(),
  // verifyToken = require("../middleware/authJwt"),
  { signup, 
    signin,logout } 
  = require("../controllers/authController");

const auth = require("../middleware/authJwt");

router.post("/register", signup, function (req, res) {});
router.post("/login", signin, function (req, res) {});

// router.get("/auth/login", (req, res) => {
//   res.render("login");
// });

router.get("/logout",logout, function (req, res) {

});

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





