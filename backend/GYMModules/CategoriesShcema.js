const mongoose = require("mongoose");

// const deepPopulate = require("mongoose-deep-populate")(mongoose);

const Schema = mongoose.Schema;

const ExercisesSchema = new Schema({
  exercisesName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 25,
    minLength:4,
    match: /^[a-zA-Z\s]*$/
    // match:/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/


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
    maxLength: 25,
    minLength:4
  },
  categoryImg: {
    data: Buffer,
    contentType: String
  },
  exercises: [ExercisesSchema]
    //[{ type: mongoose.Schema.Types.ObjectId, ref:"exercisesSchema"}]

});

// const population = [{path: 'exercises'}];
// CategorySchema.plugin(deepPopulate, {});

// Create a model with the specific schema
const CategoryModel = mongoose.model("Categories", CategorySchema);
// export the created model
module.exports = CategoryModel;
