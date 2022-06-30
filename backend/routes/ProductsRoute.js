const {
  getProducts,
  getProduct,

} = require("../controllers/ProductController");
const auth = require("../middleware/authJwt");
const admin = require("../middleware/admin");
const Router = require("express").Router();
const ProductsModel = require("../GYMModules/ProductsSchema");
const ProductRouter = Router;

ProductRouter.get("/", getProducts);

ProductRouter.get("/:id", getProduct);


ProductRouter.post("/add",[auth,admin], async(req,res)=>{
const product = new ProductsModel({
  name: req.body.name,
  brand: req.body.brand,
  description: req.body.description,
  category: req.body.category,
});

  await product.save((err, user) => {
    if (err) {
      res.status(500).send({
        message: "Product already exist",
      });
      return;
    } else {
      res.status(200).send({
        message: "Product added successfully",
      });
    }
  });
});

module.exports = ProductRouter;
