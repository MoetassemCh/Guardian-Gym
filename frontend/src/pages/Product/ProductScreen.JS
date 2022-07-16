// import { Row, Col } from "react-bootstrap";
// import Product from "./Product";
// import { listProducts } from "../../actions/ProductAction";
// import { useDispatch, useSelector } from "react-redux";
// import Loader from "../../components/Loader/Loader";
// import Alert from "react-bootstrap/Alert";

// import { useEffect } from "react";

// const PrroductScreen = () => {
//   const dispatch = useDispatch();
//   const productList = useSelector((state) => state.productList);
//   const { loading, error, products } = productList;

//   useEffect(() => {
//     dispatch(listProducts);
//   }, [dispatch]);

//   return (
//     <>
//       <h1>Our Product</h1>

//       {loading ? (
//         <h2>Loadin..</h2>
//       ) : error ? (
//         <h3>{error}</h3>
//       ) : (
//         <Row>
//           {products.map((product) => (
//             <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
//               <Product product={product} />
//             </Col>
//           ))}
//         </Row>
//       )}
//     </>
//   );
// };

// export default PrroductScreen;
