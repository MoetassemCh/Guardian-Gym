// models/Person.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const address=new mongoose.Schema({
   country: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    street: {
        type: String,
        required: true,
    },
  
    })


const userinfo=new mongoose.Schema({
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
         password: {
            type: String,
            required: true,
        },
        phoneNumber: {
            type: String,
            required: true,
        }
            
            }) 


const usersSchema=new mongoose.Schema({
    address:[address],
    userinfo:[userinfo],

    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },
    })

// Create a model with the specific schema
const usersModel = mongoose.model("usersModel", usersSchema);
// export the created model
module.exports = usersModel;