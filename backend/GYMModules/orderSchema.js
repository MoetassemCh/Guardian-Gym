const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//costs 
//total
//subtotal
//tax

const OrderSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "users",
    },
    orderitems: [
      {
        name: {
          type: String,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          default: 1,
          min: 1,
        },
        image: {
          type: String,
          required: true,
        },
        price: {
          type: Number,
          required: true,
          min: 1,
        },
        discount: {
          type: Number,
        },
        Products: [
          {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Products",
          },
        ],
      },
    ],
    shippingAddress: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      country: { type: String, required: true },
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    paymentResult: {
      id: { type: String },
      status: { type: String },
      update_time: { type: String },
      email_address: { type: String },
    },
    taxPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    shippingPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    paidAt: {
      type: Date,
    },
    isDelivered: {
      type: Boolean,
      required: true,
      default: false,
    },
    deliveredAt: {
      type: Date,
    },
  },
  { timestamps: true }
);

// Create a model with the specific schema
const OrderModel = mongoose.model("Orders", OrderSchema);
// export the created model
module.exports = OrderModel;