import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useParams } from "react-router-dom";
import { listProductDetails } from "../../actions/ProductAction";
import { PRODUCT_UPDATE_RESET } from "../../constants/productConstants";
import axios from "axios";
import { LinkContainer } from "react-router-bootstrap";
import { toast } from "react-toastify";

import "./test.css";
const Test2 = () => {



const [data,setData]=useState([])

useEffect(()=>{
getProduct()

},[])
 
const getProduct=async()=>{

    const response=await axios.get("/products")
    if(response.status===200){
setData(response.data)

    }
}

    const deleteHandler = async (id) => {
      if (window.confirm("Are you sure you want to delete this product")) {
const res = await axios.delete(`/products/${id}`); 
if(res.status=200){
 toast.success(res.data)
 getProduct()
}
     }
    };

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
                <Link to="/admin/product/add">
                  <Button className="btn btn-success">
                    <i className="material-icons">&#xE147;</i>{" "}
                    <span>Add New Products</span>
                  </Button>
                </Link>

                <a
                  href="#deleteEmployeeModal"
                  className="btn btn-danger"
                  data-toggle="modal"
                >
                  <i className="material-icons">&#xE15C;</i> <span>Delete</span>
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
              {data &&
                data.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item._id}</td>
                      <td>{item.name}</td>
                      <td>${item.price}</td>
                      <td>{item.countInStock}</td>
                      <td>{item.description}</td>
                      <td>
                        <Link to={`/update/${item._id}`}>
                          <i
                            className="bi bi-pencil-square"
                            data-toggle="tooltip"
                            title="Edit"
                          ></i>
                        </Link>
                        <Link to="" className="delete">
                          <i
                            onClick={() => deleteHandler(item._id)}
                            className="bi bi-trash3"
                            data-toggle="tooltip"
                            title="Delete"
                          ></i>
                        </Link>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </>
);
};

export default Test2;
