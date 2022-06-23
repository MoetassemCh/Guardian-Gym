const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../GYMModules/usersSchema");

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
    const token = user.generateTokens();
    if (err) {
      res.status(500).send({
        message: "That usernmae is taken.Try another",
      });
      return;
    } else {
      res.header('x-auth-token',token).status(200).send({
        message: "User Registered successfully",
      });
    }
  });
};

exports.signin = async (req, res) => {
  let user = await User.findOne({
    email: req.body.email,
  });
  if (!user) {
    return res.status(404).send("Invalid email or password");
  }

  const checkPassword = await bcrypt.compare(req.body.password, user.password);
  if (!checkPassword) {
    return res.status(404).send("Invalid email or password");
  }

  const token = user.generateTokens();
  res.send(token);
};
