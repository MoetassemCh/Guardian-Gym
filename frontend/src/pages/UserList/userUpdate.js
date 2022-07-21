import Form from "react-bootstrap/Form";
import { Link, Navigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useParams } from "react-router-dom";
import { getUserDetails, updateUser } from "../../actions/userActions";
import { USER_UPDATE_RESET } from "../../constants/userConstants";
import Loader from "../../components/Loader/Loader";
import Message from "../../components/message"
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";


const UserUpdate = () => {
  const userId = useParams();

  const Navigate = useNavigate();

 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [isAdmin, setIsAdmin] = useState(false);
  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

    const userUpdate = useSelector((state) => state.userUpdate);
    const {
      loading: loadingUpdate,
      error: errorUpdate,
      success: successUpdate,
    } = userUpdate;


 useEffect(() => {
   if (successUpdate) {
     dispatch({ type: USER_UPDATE_RESET });
     Navigate("/admin/userlist");
   } else {
     if (!user.name || user._id !== userId) {
       dispatch(getUserDetails(userId));
     } else {
       setName(user.name);
       setEmail(user.email);
       setIsAdmin(user.isAdmin);
     }
   }
 }, [dispatch, Navigate, userId, user, successUpdate]);


  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateUser({ _id: userId, name, email, isAdmin }));
  };


  return (
    <>
      {loadingUpdate && <Loader />}
      {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
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
            <Form onSubmit={submitHandler}>
              <Row>
                <Col>
                  <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="name"
                      placeholder="Enter name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group controlId="isadmin">
                    <Form.Check
                      type="checkbox"
                      label="Is Admin"
                      checked={isAdmin}
                      onChange={(e) => setIsAdmin(e.target.checked)}
                    ></Form.Check>
                  </Form.Group>
                </Col>
              </Row>
              <div className="mt-5">
                <Row>
                  <Col sm={6}>
                    <Button type="submit" variant="primary">
                      Update
                    </Button>
                  </Col>
                </Row>
              </div>
            </Form>
          </div>
        </div>
      )}
    </>
  );
};

export default UserUpdate;
