const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User=require("./user");
const Products=require("./products")

const OrderSchema = new Schema({
    User: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    Products:[ { type: mongoose.Schema.Types.ObjectId, ref: "Products" }],

});

// Create a model with the specific schema
const OrderModel = mongoose.model("Orders", OrderSchema);
// export the created model
module.exports = OrderModel;