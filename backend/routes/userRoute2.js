const express = require("express");
const passport = require("passport");
const auth = require("../middleware/authJwt");

(router = express.Router()),
  // verifyToken = require("../middleware/authJwt"),
  ({ signin, signup, profile,Updateprofile } = require("../controllers/authController2"));

// router.route("/").post(signup).get(getUsers);

router.post("/login", signin, function (req, res) {});

router.post("/register", signup, function (req, res) {});

// router.get("/logout", logout, function (req, res) {});

router.route("/profile").get(auth, profile).put(auth, Updateprofile);


module.exports = router;
// router.get(
//   "/google",
//   passport.authenticate("google", {
//     scope: ["profile"],
//   })
// );
// router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
//   res.redirect('/profile');
// });


