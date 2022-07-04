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
const validatePhoneNumber = function (phoneNumber) {
  let rePh = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
  return rePh.test(phoneNumber);
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
  lastName: {
    type: String,
    // required: true,
    match: /[a-z]/,
    trim: true,
    maxlength: 20,
  },
  email: {
    type: String,
    // required: "Email address is required",
    unique: [true, "email already exists in database!"],
    lowercase: true,
    trim: true,
    validate: [validateEmail, "Please fill a valid email address"],
    match: [
      /^([a-zA-Z0-9_\-?\.?]){3,}@([a-zA-Z]){3,}\.([a-zA-Z]){2,5}$/,
      "Please fill a valid email address",
    ],
  },
  password: {
    type: String,
    required: "Password is required",
    trim: true,
    validate: [validatePassword, "Please fill a valid password"],
    match: [
      /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})(?=.*[!@#$%^&*])/,
      "Please fill a valid password",
    ],
  },
  gender: {
    type: String,
    enum: ["male", "female"],
  },
  Age: {
    type: Number,
    min: [18, "Min age is 18 years"],
    max: 70,
  },
  phoneNumber: {
    type: String,
    // required: true,
    validate: [validatePhoneNumber, "Please fill a valid PhoneNumber"],
    match: [
      /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/,
      "Please fill a valid PhoneNumber",
    ],
  },

  address: {
    country: {
      type: String,
      // required: true,
      trim: true,
      maxLength: 20,
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
  },

  isAdmin: {
    type: Boolean,
    default: false,
  },
});



// Create a model with the specific schema
const User = mongoose.model("User", usersSchema);
// export the created model
module.exports = User ;
