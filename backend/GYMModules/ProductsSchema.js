const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
   
    },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const ProductsSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    // required: true,
    ref: "User",
  },
  name: {
    type: String,
    // required: true,
    // unique: [true, "PLease add a product name"],
  },

  image: {
    type: String,
    // required: true,
  },
  brand: {
    type: String,
    // required: true,
  },
  category: {
    type: String,
    // required: true,
  },
  description: {
    type: String,
    // required: true,
  },
  reviews: [reviewSchema],
  rating: {
    type: Number,
    // required: true,
    default: 0,
  },
  numReviews: {
    type: Number,
    // required: true,
    default: 0,
  },
  price: {
    type: Number,
    // required: true,
    default: 0,
  },
  countInStock: {
    type: Number,
    // required: true,
    default: 0,
  },
  // category{}
});

// Create a model with the specific schema
const ProductsModel = mongoose.model("Product", ProductsSchema);
// export the created model
module.exports = ProductsModel;
