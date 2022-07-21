import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useParams } from "react-router-dom";
import { listProductDetails } from "../../actions/ProductAction";
import { PRODUCT_UPDATE_RESET } from "../../constants/productConstants";
import axios from "axios"
import {toast} from "react-toastify"
import { useDispatch, useSelector } from "react-redux";


import "./test.css";
const initialState = {
  name: "",
  price: "",
//   image: "",
  brand: "",
  category: "",
  countInStock: "",
  description: "",
};
const Test3 = () => {
  const { id } = useParams();


  useEffect(()=>{
   if(id){
    getSingleProduct(id)
   }

  },[id])

const getSingleProduct = async (data) => {
  const response = await axios.put(`/products/${id}`);
  if (response.status === 200) {
setState({...response.data[0]})
  }
};


const [state,setState]=useState(initialState)



  const{name,
price,
brand,
category,
countInStock,
description}=state

//   const [name, setName] = useState("");
//   const [price, setPrice] = useState(0);
//   const [image, setImage] = useState("");
//   const [brand, setBrand] = useState("");
//   const [category, setCategory] = useState("");
//   const [countInStock, setCountInStock] = useState(0);
//   const [description, setDescription] = useState("");

const dispatch = useDispatch();
const userLogin = useSelector((state) => state.userLogin);
const { userInfo } = userLogin;


  const Navigate = useNavigate();

 
const addProduct=async(data)=>{
    const response = await axios.post("/products/add",data);
    if(response.status === 200){
toast.success(response.data)
    }
}

const updateProduct = async (data, id) => {
  const response = await axios.put(`/products/${id}`, data);
  if (response.status === 200) {
    toast.success(response.data);
  }
};



     const submitHandler = (e) => {
      e.preventDefault();
      if(!name||
!price||
!brand||
!category||
!countInStock||
!description){
    toast.error("invalid data")
}
else{
  if(!id){
    addProduct(state)
  }else{
    updateProduct(state,id)
  }
   setTimeout(() =>Navigate("/admin/productlist"),500);
}
   
      
     };

     const habdleInputChange=(e)=>{
let{name,value}=e.target
setState({ ...state,[name]:value})
     }

     

  return (
    <>
      <div className="container-xl tableProduct">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-6">
                  <h2>
                    Add <b>Products</b>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        
        <div className="col-sm-6">
          <form onSubmit={submitHandler}>
            <Row>
              <Col>
                <div className="form-group">
                  <label>Email address</label>
                  <input
                    className="form-control"
                    type="name"
                    name="name"
                    value={name}
                    onChange={habdleInputChange}
                    placeholder="Enter your Product name"
                  />
                </div>
              </Col>
              <Col>
                {" "}
                <div className="form-group">
                  <label>price</label>
                  <input
                    className="form-control"
                    type="number"
                    name="price"
                    value={price}
                    onChange={habdleInputChange}
                    placeholder="Enter your price"
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="form-group">
                  <label>description</label>
                  <input
                    className="form-control"
                    type="text"
                    name="description"
                    value={description}
                    onChange={habdleInputChange}
                    placeholder="Enter your description"
                  />
                </div>
              </Col>
              <Col>
                {" "}
                <div className="form-group">
                  <label>category</label>
                  <input
                    className="form-control"
                    type="text"
                    name="category"
                    value={category}
                    onChange={habdleInputChange}
                    placeholder="Enter your category"
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="form-group">
                  <label>brand</label>
                  <input
                    className="form-control"
                    type="text"
                    name="brand"
                    value={brand}
                    onChange={habdleInputChange}
                    placeholder="Enter your brand"
                  />
                </div>
              </Col>
              <Col>
                <div className="form-group">
                  <label>countInStock</label>
                  <input
                    className="form-control"
                    type="number"
                    name="countInStock"
                    value={countInStock}
                    onChange={habdleInputChange}
                    placeholder="Enter your countInStock"
                  />
                </div>
              </Col>
            </Row>
            <div className="mt-5">
              <Row>
                {" "}
                <Col sm={6}>
                  <Link to="/admin/productlist">
                    <Button variant="secondary" type="submit">
                      Back
                    </Button>
                  </Link>
                </Col>
                <Col sm={6}>
                  <Button variant="success" type="submit">
                    Add Product
                  </Button>
                </Col>{" "}
              </Row>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Test3;
