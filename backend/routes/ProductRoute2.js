
const {
    getProducts,
    getProductById,
    deleteProduct,
    createProduct,
    updateProduct,
    createProductReview,
    getTopProducts,
  } =require('../controllers/ProductController2') 
  const { protect, admin } =require('../middleware/authmiddleware')
  
  const Router = require("express").Router();
  const ProductRouter = Router;
  
  ProductRouter.route('/').get(getProducts).post(protect, admin, createProduct)
  ProductRouter.route('/:id/reviews').post(protect, createProductReview)
  ProductRouter.get('/top', getTopProducts)
  ProductRouter
    .route('/:id')
    .get(getProductById)
    .delete(protect, admin, deleteProduct)
    .put(protect, admin, updateProduct)
  
  module.exports = ProductRouter;