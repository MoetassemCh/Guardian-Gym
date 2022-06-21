const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExercisesSchema = new Schema({
  exercisesName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 25,
    match: /^[a-zA-Z\s]*$/,
  },
  Steps: {
    type: Array,
    required: true,
  },
  exImg: {
    data: Buffer,
    contentType: String,
  },
});
const CategorySchema = new Schema({
  categoryName: {
    type: String,
    required: true,
    trim: true,
    unique: [true, "PLease add a category name"],
    maxLength: 20,
  },
  categoryImg: {
    data: Buffer,
    contentType: String,
  },
  exercises: [ExercisesSchema],
});
// Create a model with the specific schema
const CategoryModel = mongoose.model("Categories", CategorySchema);
// export the created model
module.exports = CategoryModel;
