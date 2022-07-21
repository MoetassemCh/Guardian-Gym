const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ExercisesSchema = new Schema({
  exercisesName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 25,
    minLength: 4,
    match: /^[a-zA-Z\s]*$/,
    // match:/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/
  },
  duration: {
    type: Number,
    required: true,
  },
  exImg: {
    type: String,
    default:
      "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
  },
});


const CategorySchema = new Schema({
  categoryName: {
    type: String,
    required: true,
    trim: true,
    unique: [true, "PLease add a category name"],
    maxLength: 25,
    minLength: 4,
  },
  categoryImg: {
    type: String,
    default:"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
  },
  exercises: [ExercisesSchema],
  //[{ type: mongoose.Schema.Types.ObjectId, ref:"exercisesSchema"}]
});
// Create a model with the specific schema
const CategoryModel = mongoose.model("Categories", CategorySchema);
// export the created model
module.exports = CategoryModel;
