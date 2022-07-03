const {
    getProducts,
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/ProductsController.js')

const Router = require('express').Router;
 
// initialize express router
const ProductsRouter = Router();

// GET request for a list of all
ProductsRouter.get('/Products', getProducts);

// GET request for one (specified by its ID)
ProductsRouter.get('/Product/:id', getProduct);

// POST request to add
ProductsRouter.post('/addProduct', addProduct);

// PUT request to update (specified by its ID)
ProductsRouter.put('/updateProduct/:id', updateProduct);

// DELETE request to delete one (specified by its ID)
ProductsRouter.delete('/deleteProduct/:id', deleteProduct);

module.exports = ProductsRouter;