const {
    getCategories,
    getCategoryExercises

} = require('../controllers/UserCategoriesController')

const Router = require('express').Router;
 
// initialize express router
const userCategoriesRoute = Router();

// GET request for a list of all catg
userCategoriesRoute.get('/', getCategories);

// GET request for one catg (specified by its ID)
userCategoriesRoute.get('/:id', getCategoryExercises);


module.exports = userCategoriesRoute;