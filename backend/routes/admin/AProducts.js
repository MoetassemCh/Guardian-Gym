const {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("../../controllers/admin/AProductsC");
const auth = require("../../middleware/authJwt");
const admin=require("../../middleware/admin")

const Router = require("express").Router;

const AdminProduct = Router();


AdminProduct.get("/",[auth,admin], getProducts);

AdminProduct.delete("/:id", [auth, admin], deleteProduct);
AdminProduct.route("/Product/:id").get([auth, admin],getProduct).put([auth, admin],updateProduct);

AdminProduct.post("/addProduct", [auth, admin], addProduct);



module.exports = AdminProduct;
