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

import "./test.css";
const ProductAdd = () => {
    const productId = useParams();

 const [name, setName] = useState("");
 const [price, setPrice] = useState(0);
 const [image, setImage] = useState("");
 const [brand, setBrand] = useState("");
 const [category, setCategory] = useState("");
 const [countInStock, setCountInStock] = useState(0);
 const [description, setDescription] = useState("");



  const dispatch = useDispatch();
 
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;



  const Navigate = useNavigate();




  useEffect(() => {
    if (!product.name || product._id !== productId) {
      dispatch(listProductDetails(productId));
    } else {
      setName(product.name);
      setPrice(product.price);
      setImage(product.image);
      setBrand(product.brand);
      setCategory(product.category);
      setCountInStock(product.countInStock);
      setDescription(product.description);
    }
  }, [dispatch, Navigate, productId, product,]);


//    const submitHandler = (e) => {
//      e.preventDefault();
//      dispatch(
//        updateProduct({
//          _id: productId,
//          name,
//          price,
//          image,
//          brand,
//          category,
//          description,
//          countInStock,
//        })
//      );
//    };

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
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <Form>
            <Row>
              <Col>
                <Form.Group as={Col} controlId="formGridname">
                  <Form.Label>name</Form.Label>

                  <Form.Control
                    type="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your Product name"
                  />
                </Form.Group>
              </Col>
              <Col>
                {" "}
                <Form.Group as={Col} controlId="formGridprice">
                  <Form.Label>price</Form.Label>

                  <Form.Control
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Enter your price"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group as={Col} controlId="formGridescription">
                  <Form.Label>description</Form.Label>
                  <Form.Control
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter your description"
                  />
                </Form.Group>
              </Col>
              <Col>
                {" "}
                <Form.Group>
                  <Form.Label>Change Profile Picture</Form.Label>
                  <Form.Control
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    id="custom-file"
                    type="file"
                    label="Upload Profile Picture"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group as={Col} controlId="formGridbrand">
                  <Form.Label>brand</Form.Label>
                  <Form.Control
                    type="text"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    placeholder="Enter your brand"
                  />
                </Form.Group>
              </Col>
              <Col>
                {" "}
                <Form.Group as={Col} controlId="formGridcategory">
                  <Form.Label>category</Form.Label>
                  <Form.Control
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder="Enter your category"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group as={Col} controlId="formGridcountInStock">
                  <Form.Label>countInStock</Form.Label>
                  <Form.Control
                    type="number"
                    value={countInStock}
                    onChange={(e) => setCountInStock(e.target.value)}
                    placeholder="Enter your countInStock"
                  />
                </Form.Group>
              </Col>
              <Col> </Col>
            </Row>
            <div className="mt-5">
              <Row>
                {" "}
                <Col sm={6}>
                  <Button variant="success" type="submit">
                    ADD
                  </Button>
                </Col>
                <Col sm={6}>
                  <Button variant="secondary" type="submit">
                    Back
                  </Button>
                </Col>{" "}
              </Row>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default ProductAdd;
