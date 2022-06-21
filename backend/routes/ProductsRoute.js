const {
  getProducts,
  getProduct,
  //   addProduct,
} = require("../controllers/ProductController");
const Router = require("express").Router();
const ProductRouter = Router;

ProductRouter.get("/", getProducts);

ProductRouter.get("/:id", getProduct);

// ProductRouter.post("/add", addProduct);

module.exports = ProductRouter;
