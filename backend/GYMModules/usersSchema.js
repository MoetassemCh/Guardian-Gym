// models/Person.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt=require("bcrypt")

const validateEmail = function (email) {
  let re = /^([a-zA-Z0-9_\-?\.?]){3,}@([a-zA-Z]){3,}\.([a-zA-Z]){2,5}$/;
  return re.test(email);
};
const validatePassword = function (password) {
  let reP = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})(?=.*[!@#$%^&*])/;
  return reP.test(password);
};




const usersSchema = new mongoose.Schema({
  // googleId: {
  //   type: String,
  // },
  name: {
    type: String,
    required: true,
    match: /[a-z]/,
    trim: true,
    maxlength: 20,
  },

  email: {
    type: String,
    // required: "Email address is required",
    unique: true,
    lowercase: true,
    trim: true,
    // validate: [validateEmail, "Please fill a valid email address"],
    // match: [
    //   /^([a-zA-Z0-9_\-?\.?]){3,}@([a-zA-Z]){3,}\.([a-zA-Z]){2,5}$/,
    //   "Please fill a valid email address",
    // ],
  },
  password: {
    type: String,
    // required: "Password is required",
    trim: true,
    // validate: [validatePassword, "Please fill a valid password"],
    // match: [
    //   /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})(?=.*[!@#$%^&*])/,
    //   "Please fill a valid password",
    // ],
  },
  pic: {
    type: String,
    required: true,
    default:
      "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
  },
  gender: {
    type: String,
    possibleValues: ["male", "female"],
  },
  Age: {
    type: Number,
    min: [18, "Min age is 18 years"],
    max: 70,
  },
  phoneNumber: {
    type: Number,
    // required: true,
  },

  country: {
    type: String,
    // required: true,
  },
  city: {
    type: String,
    // required: true,
    trim: true,
    maxLength: 20,
  },
  state: {
    type: String,
    // required: true,
    trim: true,
    maxLength: 20,
  },
  street: {
    type: String,
    // required: true,
    trim: true,
    maxLength: 20,
  },

  isAdmin: {
    type: Boolean,
    default: false,
  },
});

usersSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

usersSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});



// Create a model with the specific schema
const User = mongoose.model("User", usersSchema);
// export the created model
module.exports = User ;
