const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Categories=require("./Categories")
const ExercisesSchema = new Schema({

    ExerciseName:{
        type:String,
        require:true,
        unique:[true, "PLease add an exercise name"],
    },

    Steps: [
        {
          type: Array,
        },
      ],
      Category: { type: mongoose.Schema.Types.ObjectId, ref: "Categories" },
});
// Create a model with the specific schema
const ExercisesModel = mongoose.model("Exercises", ExercisesSchema);
// export the created model
module.exports = ExercisesModel;