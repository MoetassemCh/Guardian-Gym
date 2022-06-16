const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ProductsSchema = new Schema({

    ProductName:{
        type:String,
        required:true,
        unique:[true, "PLease add a product name"],
    },

    ProductDescription:{
        type:String,
        required:true,
    },
    
    Price:{
        type:String,
        require:true,
    },
    Images:{
    type:Array,
    required:true
    },

    sale:{
        type:String,
    }

});

// Create a model with the specific schema
const ProductsModel = mongoose.model("Products", ProductsSchema);
// export the created model
module.exports = ProductsModel;