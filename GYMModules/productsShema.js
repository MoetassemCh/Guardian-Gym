// models/Person.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const productinfo=new mongoose.Schema({
    productName: {
        type: String,
        required: true,
    },
    productPrice: {
        type: Number,
        required: true,
    }
    })


const productsSchema=new mongoose.Schema({
    productinfo:[productinfo],
    productDiscription: {
        type: String
    },
    })

// Create a model with the specific schema
const productsModel = mongoose.model("productsModel", productsSchema);
// export the created model
module.exports = productsModel;