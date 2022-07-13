const {
  getProducts,
  getProduct,
  createProductReview,
  getTopProducts,

} = require("../controllers/ProductController");
const auth = require("../middleware/authJwt");
const admin = require("../middleware/admin");
const Router = require("express").Router();
const ProductsModel = require("../GYMModules/ProductsSchema");
const ProductRouter = Router;

ProductRouter.get("/", getProducts);

ProductRouter.get("/:id", getProduct);

ProductRouter.route("/:id/reviews").post(auth,createProductReview);

ProductRouter.get("/top",getTopProducts)











module.exports = ProductRouter;
