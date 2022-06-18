const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartItemSchema = new Schema({


    quantity: {
        type: Number,
        required: true,
        default: 1,
        min:1
    
    },
    discount: {
        type: Number,

    },
    
    price: {
        type: Number,
        required: true,
        min:1
    },
    cart_id: {type: mongoose.Schema.Types.ObjectId, ref:'cartSchema' },
    product_id: {type: mongoose.Schema.Types.ObjectId, ref:'products' },
});
// Create a model with the specific schema
const cartItemModel = mongoose.model("cartItem", cartItemSchema);
// export the created model
module.exports = cartItemModel;