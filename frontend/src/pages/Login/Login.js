
import { Link} from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader"
import { login } from "../../actions/userActions";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container"
import Alert from "react-bootstrap/Alert";
import { offset } from "@popperjs/core";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const Login = () => {
  const Navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);

  const { loading,error,userInfo } = userLogin;

  const redirect = window.location.search
    ? window.location.search.split("=")[1]
    : "/";

  useEffect(() => {

    if (userInfo) {
     Navigate(redirect);
    }
 
  }, [Navigate,userInfo,redirect]);



  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  
  };

  return (
    <>
      <section className="vh-100 mt-5">
        <Container fluid className="h-custom">
          {loading && <Loader />}
          <Row className="row d-flex justify-content-center align-items-center h-100">
            {" "}
            {error && (
              <Alert variant="danger">
                <Alert.Heading style={{ fontSize: "15px" }}>
                  {error}
                </Alert.Heading>
              </Alert>
            )}
            <Col md={9} lg={9} xl={5}>
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt=""
              />
            </Col>
            <Col md={8} lg={6} xl={{ offset: 1 }}>
              <Form onSubmit={submitHandler}>
                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0">Log In</p>
                </div>

                {/* <!-- Email input --> */}
                <div className="form-outline mb-4">
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                  >
                    <Form.Control
                      size="lg"
                      type="email"                    
                      placeholder="Enter an email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    ></Form.Control>
                  </FloatingLabel>
                </div>

                {/* <!-- Password input --> */}
                <div className="form-outline mb-3">
                  <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control
                      size="lg"
                      type="password"
                      
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    ></Form.Control>
                  </FloatingLabel>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <Button
                    type="submit"
                    className="btn btn-primary btn-lg login-button"
                  >
                    Login
                  </Button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Don't have an account?
                    <Link
                      className="link-danger"
                      to={
                        redirect
                          ? `/register?redirect=${redirect}`
                          : "/register"
                      }
                    >
                      Register
                    </Link>
                  </p>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
 
export default Login;