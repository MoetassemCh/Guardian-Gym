const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const addressSchema = new Schema({

    country:{
        type:String,
        require:true,
        unique:true,
    },

    city:{
        type:String,
        require:true,
        unique:true,
    }
   

});
// Create a model with the specific schema
const addressModel = mongoose.model("address", addressSchema);
// export the created model
module.exports = addressModel;