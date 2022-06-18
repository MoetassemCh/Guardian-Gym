const mongoose=require("mongoose")
const ProductsModel=require("../GYMModules/ProductsSchema")

const getProducts=async(req,res)=>{

    const products=await ProductsModel.find().then((products) => res.json(products))
    .catch((err) => res.status(400).json("Error" + err));
}

const getProduct=async(req,res)=>{
  try{
    const id=req.parms.id
     const product = await ProductsModel.find({
       _id: id,
     });
  }catch(error){
    res.status(500).json({ message: "internal error" });
}
}

// const addProduct = async (req, res) => {
//   try {
//     const product = req.body;
//     const result = await ProductsModel.create(product);

//     if (result) {
//       res.status(201).json({ message: "added product" });
//     } else {
//       res.status(409).json({ message: "failed to add product" });
//     }
//   } catch (error) {
//     res.status(500).json({ message: "internal error" });
//   }
// };


module.exports = {
  getProducts,
  getProduct,
  // addProduct
};

