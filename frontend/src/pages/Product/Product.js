import { useEffect, useState } from "react";
import axios from "axios";
import ProductAll from "./productAll";
import { listProducts } from "../../actions/ProductAction";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";
import Alert from "react-bootstrap/Alert";

const Product = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

    // const [products, setProducts] = useState([]);

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

    // useEffect(() => {
    //   const fetchProduct = async () => {
    //     const {data} = await axios.get("/products");
    //     setProducts(data)
    //   };
    //   fetchProduct();
    // }, []);

  return (
    <>
      {/* {products.map((product) => ( */}
      {loading && <Loader />}
      {products &&
        products.map((product) => (
          <ProductAll key={product._id} product={product} />
        ))}
  ]
    </>
  );
};

export default Product;
