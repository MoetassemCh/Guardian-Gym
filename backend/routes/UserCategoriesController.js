const mongoose = require('mongoose');
const CategoryModel = require('../GYMModules/CategoriesShcema')


const getCategories = async (req, res) => {
    
    try {
       //to return only those fields
        projection={categoryName:1, _id:0, categoryImg:1 };

        // add sorting to this field when you've done
        const sortCategories = { categoryName: 1 };
        
        const Categories =  await CategoryModel.find().select(projection).sort(sortCategories);

        res.status(200).json({Categories})

    }
    catch(error){ res.status(500).json({message : "Internal Error"})}
}

// GET request for one Category (specified by its id)
const getCategoryExercises = async (req, res) => {

    try {

        const projection = { _id: 0, categoryName:1, "exercises.exercisesName": 1, "exercises.Steps": 1,  "exercises.exImg": 1 };
        const id = req.params.id;

        const sortCategories = { exercisesName: 1 };

        const Category =  await CategoryModel.findById(id).select(projection).sort(sortCategories);

        if(Category){
            res.status(200).json({Category});
        }
        else{
            res.status(400).json({message: "Category Not Found" });
        }

    } 
    catch(error){ res.status(500).json({message : "Internal Error"})}
}


module.exports = {
    getCategories,
    getCategoryExercises
}