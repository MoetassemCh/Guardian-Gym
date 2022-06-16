// models/Person.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


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
