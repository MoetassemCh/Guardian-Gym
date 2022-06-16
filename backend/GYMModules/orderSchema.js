const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const users = require("./usersSchema");
const Products=require("./ProductsSchema")
const cart = require("./cartSchema");

//costs 
//total
//subtotal
//tax

const OrderSchema = new Schema(
  {
    users: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    //we have product id in cartitem 
    Products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Products" }],
    //
    cart: [{ type: mongoose.Schema.Types.ObjectId, ref: "cart" }],
    isPayed: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

// Create a model with the specific schema
const OrderModel = mongoose.model("Orders", OrderSchema);
// export the created model
module.exports = OrderModel;