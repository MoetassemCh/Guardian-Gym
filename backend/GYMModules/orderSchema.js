// models/Person.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productinfo = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  productPrice: {
    type: Number,
    required: true,
  },
});

const cart = new mongoose.Schema({
  productinfo: [productinfo],
});

const userinfo = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
});

const orderSchema = new Schema(
  {
    isPayed: {
      type: Boolean,
      required: true,
      default: false,
    },
    products: {
      type: objectid,
      required: true,
    },
    cart: [cart],

    userinfo: [userinfo],
  },
  { timestamps: true }
);

// Create a model with the specific schema
const orderModel = mongoose.model("orderModel", orderSchema);
// export the created model
module.exports = orderModel;
