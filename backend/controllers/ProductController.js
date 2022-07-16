const mongoose = require("mongoose");
const ProductsModel = require("../GYMModules/ProductsSchema");
const asyncHandler =require("express-async-handler")


const getProducts = asyncHandler(async (req, res) => {
    const products = await ProductsModel.find()
    .then((products) => res.json(products))
    .catch((err) => res.status(400).json("Error" + err));
//   const pageSize=10;
//   const page = Number(req.query.pageNumber) || 1;
//   const keyword = req.query.keyword
//     ? {
//         name: {
//           $regex: req.query.keyword,
//           $options: "i",
//         },
//       }
//     : {};
// const count = await ProductsModel.countDocuments({ ...keyword });
//   const products = await ProductsModel.find({ ...keyword })
//     .limit(pageSize)
//     .skip(pageSize * (page - 1));
//   res.json({ products, page, pages: Math.ceil(count / pageSize) });
});

const getProduct = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const product = await ProductsModel.findById(id);
     if (product) {
    res.status(200).json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});


const createProductReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body;
  
  const product = await ProductsModel.findById(req.params.id);

if (product) {
  const alreadyReviewed = product.reviews.find(
    (r) => r.user.toString() === req.user._id.toString()
  );

  if (alreadyReviewed) {
    res.status(400);
    throw new Error("Product already reviewed");
  }

  const review = {
    name: req.user.name,
    rating: Number(rating),
    comment,
    user: req.user._id,
  };

  product.reviews.push(review);

  product.numReviews = product.reviews.length;

  product.rating =
    product.reviews.reduce((acc, item) => item.rating + acc, 0) /
    product.reviews.length;

  await product.save();
  res.status(201).json({ message: "Review added" });
} else {
  res.status(404);
  throw new Error("Product not found");
}
});


const getTopProducts = asyncHandler(async (req, res) => {
  const products = await ProductsModel.find({}).sort({ rating: -1 }).limit(3);
  res.json(products);
});


module.exports = {
  getProducts,
  getProduct,
getTopProducts,
createProductReview
};
