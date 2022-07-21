const express = require("express");
router = express.Router();

const {
  getProducts,
  getProduct,
  createProductReview,
  getTopProducts,
  addProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/ProductController");
const auth = require("../middleware/authJwt");
const admin = require("../middleware/admin");
const Router = require("express").Router();
const ProductsModel = require("../GYMModules/ProductsSchema");

// router.route("/").get(getProducts).post(auth, admin,addProduct);

router.get("/", getProducts);

router.post("/add",addProduct);


router.get("/:id",getProduct)

router.delete("/:id", deleteProduct);

router.put("/:id", updateProduct);




// router.post("/addProduct", [auth, admin], addProduct);
// router
//   .route("/:id")
//   .get(getProduct)
//   .delete(auth, admin, deleteProduct)
//   .put(auth, admin, updateProduct);

router.route("/:id/reviews").post(auth, createProductReview);

router.get("/top", getTopProducts);

module.exports = router;
