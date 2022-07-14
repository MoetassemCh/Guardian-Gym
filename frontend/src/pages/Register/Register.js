import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState, useEffect,useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";
import { register } from "../../actions/userActions";
import { useNavigate } from "react-router-dom";
import FormContainer from "../../components/FormContainer/FormContainer";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import { offset } from "@popperjs/core";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Select from "react-select"
import countryList from "react-select-country-list"
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input"



const RegisterScreen = () => {


 

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setgender] = useState("");
  const [country, setcountry] = useState("");
  const [Age, setAge] = useState("");
  const [city, setcity] = useState("");
  const [street, setstreet] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");



     const options = useMemo(() => countryList().getData(), []);

     const changeHandler = (country) => {
       setcountry(country);
     };
     
  const Navigate = useNavigate();

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const redirect = window.location.search ? window.location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      Navigate(redirect);
    }
  }, [Navigate, userInfo, redirect]);

  const submitHandlers = (e) => {
    e.preventDefault();
    dispatch(
      register(
        name,
        email,
        password,
        gender,
        Age,
        phoneNumber,
        country,
        city,
        street
      )
    );
  };

  return (
    <>
      <section className="h-100 mt-5">
        <Container className="py-5 h-100">
          {loading && <Loader />}
          <Row className="d-flex justify-content-center align-items-center h-100">
            {error && (
              <Alert variant="danger">
                <Alert.Heading style={{ fontSize: "15px" }}>
                  {error}
                </Alert.Heading>
              </Alert>
            )}
            <Col>
              <div className="card card-registration my-4">
                <Row className="g-0">
                  <div className="col-xl-6 d-none d-xl-block">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                      alt=""
                      className="img-fluidR"
                    />
                  </div>
                  <div className="col-xl-6">
                    <div className="card-body p-md-5 text-black">
                      <h3 className="mb-5 text-uppercase">
                        Student registration form
                      </h3>
                      <Form onSubmit={submitHandlers}>
                        <Row className="mb-3">
                          <Form.Group as={Col} controlId="formGridname">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                              type="name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              placeholder="Enter your name"
                            />
                          </Form.Group>

                          <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                              type="password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              placeholder="Password"
                            />
                          </Form.Group>
                        </Row>

                        <Row className="mb-3">
                          <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="Enter email"
                            />
                          </Form.Group>

                          <Col>
                            <Form.Group as={Col} controlId="formGridCheckbox">
                              <Form.Check
                                type="checkbox"
                                value="male"
                                onChange={(e) => setgender(e.target.value)}
                                label="Male"
                              />
                            </Form.Group>

                            <Form.Group controlId="formGridCheckbox2">
                              <Form.Check
                                type="checkbox"
                                value="female"
                                onChange={(e) => setgender(e.target.value)}
                                label="Female"
                              />
                            </Form.Group>
                          </Col>
                        </Row>

                        <Row className="mb-3">
                          <Form.Group as={Col} controlId="formGridNumber">
                            <Form.Label>Age</Form.Label>
                            <Form.Control
                              type="number"
                              value={Age}
                              onChange={(e) => setAge(e.target.value)}
                              placeholder="Enter number"
                            />
                          </Form.Group>

                          <Form.Group as={Col} controlId="formGridPhoneNumber">
                            <Form.Label>PhoneNumber</Form.Label>
                            <PhoneInput
                              international
                              defaultCountry="LB"
                              placeholder="Enter phone number"
                              value={phoneNumber}
                              onChange={setphoneNumber}
                            />
                          </Form.Group>
                        </Row>

                        <Row className="mb-3">
                          <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                              value={city}
                              onChange={(e) => setcity(e.target.value)}
                            />
                          </Form.Group>

                          <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Country</Form.Label>
                            <Select
                              options={options}
                              value={country}
                              onChange={changeHandler}
                            ></Select>
                          </Form.Group>

                          <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>street</Form.Label>
                            <Form.Control
                              onChange={(e) => setstreet(e.target.value)}
                            />
                          </Form.Group>
                        </Row>

                        <Button variant="primary" type="submit">
                          Submit
                        </Button>
                      </Form>
                    </div>
                  </div>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* <h1>Sign Up</h1>

      <Form onSubmit={submitHandlers}>
        {loading && <Loader />}
        {message && (
          <Alert variant="danger">
            <Alert.Heading style={{ fontSize: "15px" }}>{error}</Alert.Heading>
          </Alert>
        )}
        {error && (
          <Alert variant="danger">
            <Alert.Heading style={{ fontSize: "15px" }}>{error}</Alert.Heading>
          </Alert>
        )}
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary">
          Register
        </Button>
      </Form>

      <Row className="py-3">
        <Col>
          Have an Account?{" "}
          <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
            Login
          </Link>
        </Col>
      </Row> */}
    </>
  );
};

export default RegisterScreen;



