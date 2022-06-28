const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../GYMModules/usersSchema");
const cookie=require("cookie-parser")
exports.signup = async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    firstName: req.body.firstName,
    email: req.body.email,
    password: hashedPassword,
    isAdmin: req.body.isAdmin,
  });

  await user.save((err, user) => {
    // const token = user.generateTokens();
    if (err) {
      res.status(500).send({
        message: "That usernmae is taken.Try another",
      });
      return;
    } else {
      res.status(200).send({
        message: "User Registered successfully",
      });
    }
  });
};

const maxAge = 3 * 24 * 60 * 60;

exports.signin = async (req, res) => {
  try {
    let user = await User.findOne({
      email: req.body.email,
    });
    if (!user) {
      return res.status(404).send("Invalid email or password");
    }

    const checkPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!checkPassword) {
      return res.status(404).send("Invalid email or password");
    }
    const token = jwt.sign(
      { _id: user._id, isAdmin: user.isAdmin },
      "privateKey",
      {
        expiresIn: maxAge,
      }
    );
    res.cookie("jwt", token, { httpOnly: true,maxAge:maxAge * 1000 });
    res.header("x-auth-token", token).status(200).send(token);
    // const token = user.generateTokens();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "an error occured!" });
  }

};

exports.logout = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 1 });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
      return res.status(500).json({ message: "an error occured!" });
  }


  
  // try {
    
  //   if (req.cookies.token) {
  //     res.clearCookie("token");
      
  //     return res.sendStatus(200);
  //   } else {
  //     return res.sendStatus(400);
  //   }
  // } catch (error) {
  //   console.log(error);
  //   return res.status(500).json({ message: "an error occured!" });
  // }
};


  // const maxAge = 3 * 24 * 60 * 60;
  // res.cookie("jwt",'',{maxAge:1});