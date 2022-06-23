const express = require("express");
router = express.Router(),
  // verifyToken = require("../middleware/authJwt"),
  { signup, 
    signin } 
  = require("../controllers/authController");



router.post("/register", signup, function (req, res) {});
router.post("/login", signin, function (req, res) {});



module.exports = router;
