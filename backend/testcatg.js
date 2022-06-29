const dbconnect =require("./connection.js")
const mongoose = require("mongoose");
const CategoryModel = require("./GYMModules/CategoriesShcema");
const showErrors=require("./showErrors")

const weightloss = new CategoryModel({
  "categoryName": "weight loss",

  "exercises": [
        {
          "exercisesName":"cardio",
          "Steps":["20min ellep", "10min tradm"]
        },

        {
          "exercisesName":"crunches",
           "Steps":["lay down","raise ur head", "20", "3"]
        }
  ]
});

const bodybuilding = new CategoryModel({
  "categoryName": "body building",

  "exercises": [
        {
          "exercisesName":"cardio",
           "Steps":["10min ellep", "20min tradm"]
        },

        {
          "exercisesName":"legpress machine",
           "Steps":["20,15,12", "3"]
        }
  ]
});


const drop_collection = async () => {
  await CategoryModel.collection.drop();
};

drop_collection().then(()=>{

  weightloss.save()

  .then((result) => {
    console.log("weightloss category Added!");
  })

  .catch((error) => {
    showErrors(error);
  });

  bodybuilding.save()

  .then((result) => {
    console.log("bodybuilding category Added!");  
  })

  .catch((error) => {
    showErrors(error); 
  });

})
