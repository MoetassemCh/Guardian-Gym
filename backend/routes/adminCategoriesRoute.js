const {
    getCategories,
    getCategory,
    addCategory,
    updateCategory,
    deleteCategory
} = require('../../controllers/admin/CategoriesController')

const Router = require('express').Router;
 
// initialize express router
const CategoriesRouter = Router();

// GET request for a list of all
CategoriesRouter.get('/Categories', getCategories);

// GET request for one (specified by its ID)
CategoriesRouter.get('/Category/:id', getCategory);

// POST request to add
CategoriesRouter.post('/addCategory', addCategory);

// PUT request to update (specified by its ID)
CategoriesRouter.put('/updateCategory/:id', updateCategory);

// DELETE request to delete (specified by its ID)
CategoriesRouter.delete('/deleteCategory/:id', deleteCategory);

module.exports = CategoriesRouter;