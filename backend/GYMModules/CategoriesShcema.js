const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExercisesSchema=new Schema({
exercisesName:{
type:String,
required:true,
trim:true,
maxLength:25

},
Steps:{
    type:Array,
    required:true
}
})

const CategorySchema = new Schema({
  categoryName: {
    type: String,
    required: true,
    trim: true,
    unique: [true, "PLease add a category name"],
    maxLength: 20,
  },
  exercises: [ExercisesSchema],
});
// Create a model with the specific schema
const CategoryModel = mongoose.model("Categories", CategorySchema);
// export the created model
module.exports = CategoryModel;