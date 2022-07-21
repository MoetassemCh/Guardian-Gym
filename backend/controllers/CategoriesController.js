const mongoose = require("mongoose");
const CategoryModel = require("../GYMModules/CategoriesShcema");

const getCategories = async (req, res) => {
  const category = await CategoryModel.find()
    .then((category) => res.json(category))
    .catch((err) => res.status(400).json("Error" + err));
};

// GET request for one Category (specified by its id)
const getCategoryExercises = async (req, res) => {
  try {
    const projection = {
      _id: 1,
      categoryName: 1,
      "exercises.exercisesName": 1,
      "exercises.exImg": 1,
      "exercises._id": 1,
    };
    const id = req.params.id;

    const sortCategories = { exercisesName: 1 };

    const Category = await CategoryModel.findById(id)
      .select(projection)
      .sort(sortCategories);

    if (Category) {
      res.status(200).json({ Category });
    } else {
      res.status(400).json({ message: "Category Not Found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Error" });
  }
};

const getExercises = async (req, res) => {
  try {
    const projection = {
      _id: 1,
      categoryName: 1,
      "exercises.exercisesName": 1,
      "exercises.exImg": 1,
      "exercises._id": 1,
    };
    const id = req.params.id;

    const sortCategories = { exercisesName: 1 };

    const Category = await CategoryModel.findById(id)
      .select(projection)
      .sort(sortCategories);

    if (Category) {
      res.status(200).json({ Category });
    } else {
      res.status(400).json({ message: "Category Not Found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Error" });
  }
};

module.exports = {
  getCategories,
  getCategoryExercises,
  getExercises,
};
