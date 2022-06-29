const mongoose = require('mongoose');
const CategoryModel = require('../../GYMModules/CategoriesShcema')


const getCategories = async (req, res) => {
    
    try {

        // add sorting to this field when you've done
        const sortCategories = { CategoryName: -1 };
        
        const Categories =  await CategoryModel.find().sort(sortCategories);

        res.status(200).json({
            count : Categories.length,
            Categories
        })

    }catch(error){
        res.status(500).json({message : "Internal Error"})
    }
}

// GET request for one Category (specified by its id)
const getCategory = async (req, res) => {

    try {

        // get Category id from params
        const id = req.params.id;

        // get Category name from body    
        // const CategoryName= req.body.CategoryName

        const Category =  await CategoryModel.findById(id);

        if(Category){
            res.status(200).json({
                message: "Category Found",
                Category
            });
        }else{
            res.status(400).json({
                message: "Category Not Found"
            });
        }

    } catch(error){
        res.status(500).json({message : "Internal Error"})
    }
}

// POST request to add a Category
const addCategory = async (req, res) => {
    try {

        const Category = req.body;

        try {

            const result = await CategoryModel.create(Category);

            if(result){
                res.status(201).json({
                    message: "Category Added!",
                    Category : result
                })
            }else{
                res.status(409).json({message: "Failed to Add Category"});
            }

        // this try/catch block handles CategoryModel.create errors
        }catch(error){
            console.log(error);
            res.status(400).json({message: "Category Validation Failed"});
        }

    } catch(error){
        res.status(500).json({message : "Internal Error"})
    }
}

// PUT request to update a Category
const updateCategory = async (req, res) => {

    try{

        // get Category name from body    
        // const CategoryName= req.body.CategoryName

        const id = req.params.id;
        const { categoryName, categoryImg, exercises} = req.body;

        // format update object based on query body
        // full path of a field in a nested object must be provided as a key to provide overriding the whole object

        let update = {};

        categoryName  && (update.categoryName = categoryName)
        categoryImg   && (update.categoryImg = categoryImg)

        if(exercises){

            const {exercisesName, Steps, exImg} = exercises;

            exerciseName         && (update["exercises.exerciseName"] = exerciseName)
            Steps                 && (update["exercises.Steps"] = Steps)
            exImg                 && (update["exercises.exImg"] = exImg)
           
        }

        const result = await CategoryModel.updateOne(
            {
                _id: id
                // categoryName: CategoryName 
            },
            update
        )

        if(result.matchedCount !== 1){
            res.status(400).json({message : "Category Does Not Exist"})
        }

        if(result.modifiedCount === 1){
            res.status(200).json({
                message : "Category Updated!"
            })
        }else{
            res.status(200).json({
                message : "Category Updated!"
            })
        }

    } catch(error){
        res.status(500).json({message : "Internal Error"})
    }
}

// DELETE request to delete Category
const deleteCategory = async (req, res) => {

    const id = req.params.id;

    // get Category name from body    
    // const CategoryName= req.body.CategoryName

    const filters = {
        _id : id
        // categoryName: CategoryName 
    }

    const results = await CategoryModel.deleteOne(filters)
    if(results.deletedCount === 1){
        return res.status(200).json({message : "Category Deleted!"});
    }else{
        return res.status(200).json({message : "Failed to Delete Category"});
    }

}

module.exports = {
    getCategories,
    getCategory,
    addCategory,
    updateCategory,
    deleteCategory
}