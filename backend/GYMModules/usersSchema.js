// models/Person.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const jwt = require("jsonwebtoken");

const validateEmail = function (email) {
  var re = /^([a-zA-Z0-9_\-?\.?]){3,}@([a-zA-Z]){3,}\.([a-zA-Z]){2,5}$/;
  return re.test(email);
};

var validatePhoneNumber = function (phoneNumber) {
  var rePh = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
  return rePh.test(phoneNumber);
};

//hash//bcrypt

const usersSchema = new mongoose.Schema({
  firstName: {
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
    required: "Email address is required",
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
    required: "true",
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
  // role: {
  //   type: String,
  //   enum: ["normal", "admin"],
  //   required: [true, "Please specify user role"],
  // },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false,
  },
});

usersSchema.methods.generateTokens = function () {
  const token = jwt.sign({ _id: this._id }, "privateKey");
  return token;
};
// Create a model with the specific schema
const usersModel = mongoose.model("users", usersSchema);
// export the created model
module.exports = usersModel;
