const mongoose = require("mongoose");
const CategoryModel = require("../../GYMModules/CategoriesShcema");

const getCategories = async (req, res) => {
  try {
    // add sorting to this field when you've done
    const sortCategories = { CategoryName: -1 };

    const Categories = await CategoryModel.find().sort(sortCategories);

    res.status(200).json({ count: Categories.length, Categories });
  } catch (error) {
    res.status(500).json({ message: "Internal Error" });
  }
};

// GET request for one Category (specified by its id)
const getCategory = async (req, res) => {
  try {
    // get Category id from params
    const id = req.params.id;

    const Category = await CategoryModel.findById(id);

    if (Category) {
      res.status(200).json({ message: "Category Found", Category });
    } else {
      res.status(400).json({ message: "Category Not Found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Error" });
  }
};

// POST request to add a Category
const addCategory = async (req, res) => {
  try {
    const Category = req.body;

    try {
      const result = await CategoryModel.create(Category);

      if (result) {
        res.status(201).json({ message: "Category Added!", Category: result });
      } else {
        res.status(409).json({ message: "Failed to Add Category" });
      }

      // this try/catch block handles CategoryModel.create errors
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "Category Validation Failed" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Error" });
  }
};

// PATCH/Update request to update exercises inside a Category using category id [NOT DONE YET!!!!!!!!!]

const patchExercise = async (req, res) => {
  try {
    const id = req.params.id;
    const exercises = req.body;
    const { exercisesName, Steps, exImg } = exercises;

    const category = CategoryModel.findById((category) => category.id == id);

    // let update = {};
    // if(exercises){
    //     exercisesName && (update[category.exercise.exercisesName] = exercisesName)
    //     Steps         && (update[category.exercise.Steps] = Steps)
    //     exImg         && (update[category.exercise.exImg] = exImg)
    // }
    // const result = await CategoryModel.updateOne({_id: id},update);

    if (exercisesName) category.exercise.exercisesName = exercisesName;
    if (Steps) category.exercise.Steps = Steps;
    if (exImg) category.exercise.exImg = exImg;

    res.send(`exercises of category with the id ${id} has been updated!`);

    if (result.matchedCount !== 1) {
      res.status(400).json({ message: "Category Does Not Exist" });
    }

    if (result.modifiedCount === 1) {
      res.status(200).json({ message: "Category Updated!" });
    } else {
      res.status(200).json({ message: "Category Updated!", Category });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Error" });
  }
};

// PUT request to update a category
const updateCategory = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await CategoryModel.updateOne({ _id: id }, req.body);

    if (result.matchedCount === 0) {
      return res.status(400).json({ message: "category not found" });
    }
    if (result.modifiedCount === 1) {
      return res.status(200).json({ message: "category updated" });
    } else {
      return res.status(409).json({ message: "categry not updated" });
    }
  } catch (error) {
    res.status(500).json({ message: "internal error" });
  }
};

// DELETE request to delete Category
const deleteCategory = async (req, res) => {
  const id = req.params.id;

  const filters = { _id: id };

  const results = await CategoryModel.deleteOne(filters);

  if (results.deletedCount === 1) {
    return res.status(200).json({ message: "Category Deleted!" });
  } else {
    return res.status(200).json({ message: "Failed to Delete Category" });
  }
};

module.exports = {
  getCategories,
  getCategory,
  addCategory,
  updateCategory,
  deleteCategory,
  patchExercise,
};
