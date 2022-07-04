const mongoose = require("mongoose");
const asyncHandler=require("express-async-handler")

const ProductsModel = require("../../GYMModules/ProductsSchema");

const getProducts = async (req, res) => {
  const products = await ProductsModel.find()
    .then((products) => res.json(products))
    .catch((err) => res.status(400).json("Error" + err));
};

const getProduct = async (req, res) => {
  try {
    const id = req.params.id;

    const product = await ProductsModel.findById(id);

    if (product) {
      res.status(200).json(product);
    } else {
      res.status(400).json({
        message: "product not found",
      });
    }
  } catch (error) {
    res.status(500).json({ message: "internal error" });
  }
};

const addProduct = async(req,res)=>{
const product = new ProductsModel({
  name: req.body.name,
  price: req.body.price,
  user: req.user._id,
  brand: req.body.brand,
  description: req.body.description,
  countInStock: req.body.countInStock,
  numReviews: req.body.numReviews,
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
};



const updateProduct = asyncHandler(async (req, res) => {
    const {
    name,
    price,
    description,
    image,
    brand,
    category,
    countInStock,
  } = req.body

  const product = await ProductsModel.findById(req.params.id);

  if (product) {
    product.name = name
    product.price = price
    product.description = description
    product.image = image
    product.brand = brand
    product.category = category
    product.countInStock = countInStock

    const updatedProduct = await product.save()
    res.json(updatedProduct)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

const deleteProduct = asyncHandler(async (req, res) => {
  const product = await ProductsModel.findById(req.params.id);

  if (product) {
    await product.remove();
    res.json({ message: "Product removed" });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});


module.exports = {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
};
