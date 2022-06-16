const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({


    status: {
        type: Boolean,
        required: true,
        unique:[true, "PLease add a cart status"],
    }

});
// Create a model with the specific schema
const cartModel = mongoose.model("cart", cartSchema);
// export the created model
module.exports = cartModel;