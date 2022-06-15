const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Address=require("./addressModel")
const UserSchema = new Schema({

    UserName:{
        type:String,
        require:true,
        unique:[true, "PLease enter your name"],
    },

    Email:{
        type:String,
        require:true,
        unique:[true, "PLease enter your email"],
    },

    Password:{
        type:String,
        require:true,
        unique:[true, "PLease enter a password"],
    },
  
    PhoneNumber:{
        type:String,
        require:true,
        unique:[true, "PLease enter your phone number"],
        minLength: 5,
        maxLength: 13,
    },

    Address: { type: mongoose.Schema.Types.ObjectId, ref: "Address" },


});
// Create a model with the specific schema
const UserModel = mongoose.model("User", UserSchema);
// export the created model
module.exports = UserModel;