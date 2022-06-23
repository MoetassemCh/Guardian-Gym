const {
  getProducts,
  getProduct,
    addProduct,
} = require("../controllers/ProductController");
const auth = require("../middleware/authJwt");
const Router = require("express").Router();
const ProductRouter = Router;

ProductRouter.get("/", getProducts);

ProductRouter.get("/:id", getProduct);

ProductRouter.post("/add",auth, addProduct);

module.exports = ProductRouter;
