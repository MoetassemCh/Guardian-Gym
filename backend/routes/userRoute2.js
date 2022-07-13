const express = require("express");
const passport = require("passport");
const auth = require("../middleware/authJwt");

(router = express.Router()),
  // verifyToken = require("../middleware/authJwt"),
  ({
    signin,
    signup,
    profile
 
  } = require("../controllers/authController2"));

// router.route("/").post(signup).get(getUsers);

router.post("/login", signin, function (req, res) {});

router.post("/register", signup, function (req, res) {});

router.get("/profile", auth, profile);


// router.get("/logout", logout, function (req, res) {});





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
