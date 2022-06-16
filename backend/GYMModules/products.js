const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ProductsSchema = new Schema({

    ProductName:{
        type:String,
        require:true,
        unique:[true, "PLease add a product name"],
    },

    ProductDescription:{
        type:String,
        require:true,
        unique:[true, "PLease add a product description"],
    },

    
    Price:{
        type:String,
        require:true,
        unique:[true, "PLease add a product price"],
    },

});

// Create a model with the specific schema
const ProductsModel = mongoose.model("Products", ProductsSchema);
// export the created model
module.exports = ProductsModel;