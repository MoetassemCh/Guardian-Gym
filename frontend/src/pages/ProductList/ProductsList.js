import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { LinkContainer } from "react-router-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { listProducts,deleteProduct,createProduct,updateProduct } from "../../actions/ProductAction";
import { PRODUCT_CREATE_RESET } from "../../constants/productConstants";

import "./test.css";
const ProductsList = ({ match }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState("");
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");
  //   const [postDetails, setName] = useState("");
  const [brand, setbrand] = useState("");
  const [category, setcategory] = useState("");
  const [countInStock, setcountInStock] = useState("");
  const [numReviews, setnumReviews] = useState("");
  //   const[error,setErrors]=useState(null)

  const submitHandlers = async (e) => {
    //    e.preventDefault();
    //    const addProduct = {name,price,description,brand,category,countInStock,numReviews}
    //   const { data } = await axios.post("/dashboard/product/addProduct", {
    //     body: JSON.stringify(addProduct),
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Authorization": `Bearer ${this.getTokenFromLocalStorage()}`,
    //     },
    //   });
    // const json =await data.json()
    // if (!data.ok) {
    // setErrors(json.error);
    // }
    // if(data.ok){
    //         setName('')
    //         setprice('')
    //         setdescription('')
    //         setbrand('')
    //         setcategory('')
    //         setcountInStock('')
    //         setnumReviews('')
    //  setErrors(null);
    //  console.log("product",json);
    // }
  };

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { products } = productList;
  const Navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const productDelete = useSelector((state) => state.productDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = productDelete;
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this product")) {
      dispatch(deleteProduct(id));
    }
  };

  const productCreate = useSelector((state) => state.productCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: createdProduct,
  } = productCreate;

  const createProductHandler = () => {
    dispatch(createProduct());
  };

  useEffect(() => {
    dispatch({ type: PRODUCT_CREATE_RESET });

    if (!userInfo.isAdmin) {
      Navigate("/");
    }
    if (successCreate) {
      Navigate(`/admin/product/${createdProduct._id}/edit`);
    } else {
      dispatch(listProducts());
    }
  }, [
    dispatch,
    Navigate,
    userInfo,
    successCreate,
    successDelete,
    createdProduct,
  ]);
  return (
    <>
      <div className="container-xl tableProduct">
        <div className="table-responsive">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-6">
                  <h2>
                    Manage <b>Products</b>
                  </h2>
                </div>
                <div className="col-sm-6">
                  <Button
                    onClick={createProductHandler}
                    className="btn btn-success"
                  >
                    <i className="material-icons">&#xE147;</i>{" "}
                    <span>Add New Products</span>
                  </Button>
              
                  <a
                    href="#deleteEmployeeModal"
                    className="btn btn-danger"
                    data-toggle="modal"
                  >
                    <i className="material-icons">&#xE15C;</i>{" "}
                    <span>Delete</span>
                  </a>
                </div>
              </div>
            </div>
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Count In Stock</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product._id}>
                    <td>{product._id}</td>
                    <td>{product.name}</td>
                    <td>${product.price}</td>
                    <td>{product.countInStock}</td>
                    <td>{product.description}</td>
                    <td>
                      <LinkContainer to={`/admin/product/${product._id}/edit`}>
                        <i
                          className="bi bi-pencil-square"
                          data-toggle="tooltip"
                          title="Edit"
                        ></i>
                      </LinkContainer>
                      <Link to="" className="delete">
                        <i
                          onClick={() => deleteHandler(product._id)}
                          className="bi bi-trash3"
                          data-toggle="tooltip"
                          title="Delete"
                        ></i>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>


      
 
    </>
  );
};

export default ProductsList;
