const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema({


    categoryName: {
        type: String,
        required: true,
        unique:[true, "PLease add a category name"],
    },

});
// Create a model with the specific schema
const CategoryModel = mongoose.model("Categories", CategorySchema);
// export the created model
module.exports = CategoryModel;