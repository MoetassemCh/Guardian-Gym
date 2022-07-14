import { useState, useEffect, useMemo } from "react";
import {  Button, Row, Col,Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Form from "react-bootstrap/Form"
import { getUserDetails,updateUserProfile } from "../../actions/userActions";
import Loader from "../../components/Loader/Loader";
import { useNavigate } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import Select from "react-select";

import countryList from "react-select-country-list";

import "react-phone-number-input/style.css";

import PhoneInput from "react-phone-number-input";

import axios from "axios"


const ProfileScreen = () => {
const Navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pic, setPic] = useState();
  const [password, setPassword] = useState("");
  const [Age, setAge] = useState("");
  const [country, setcountry] = useState("");
  const [city, setcity] = useState("");
  const [street, setstreet] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  // const [upload, setupload] = useState(false);
const [picMessage, setPicMessage] = useState();

   const options = useMemo(() => countryList().getData(), []);

   const changeHandler = (country) => {
     setcountry(country);
   };


  // const uploadFileHandler = async (e) => {
  //   const file = e.target.files[0];
  //   const formData = new FormData();
  //   formData.append("file", file);
  //   setupload(true);

  //   try {
  //     const config = {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     };

  //     const { data } = await axios.post("/api/upload", formData, config);

  //     setPic(data);
  //     setupload(false);
  //   } catch (error) {
  //     console.error(error);
  //     setupload(false);
  //   }
  // };

const postDetails = (pics) => {
  setPicMessage(null);
  if (pics.type === "image/jpeg" || pics.type === "image/png") {
    const data = new FormData();
    data.append("file", pics);
    data.append("upload_preset", "notezipper");
    data.append("cloud_name", "piyushproj");
    fetch("https://api.cloudinary.com/v1_1/piyushproj/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setPic(data.url.toString());
        console.log(pic);
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    return setPicMessage("Please Select an Image");
  }
};



  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;



  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;




 const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
 const { success } = userUpdateProfile;

  useEffect(() => {
    if (!userInfo) {
      Navigate("/login");
    } else {
    if(!user.name){
   dispatch(getUserDetails("profile"));
    }else{
setName(user.name)
setEmail(user.email)
setAge(user.Age)
setcountry(user.country);
setcity(user.city);
setstreet(user.street);
setphoneNumber(user.phoneNumber);
setPic(user.pic);
    }
    }
  },[dispatch,Navigate, userInfo,user]);


  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(updateUserProfile({ id:user._id,name,email,password,Age,country,city,street,phoneNumber,pic}));
  };







  return (
    <>
      <Container>
        <div className="mt-5 profile">
          <Row className="profileContainer">
            <Form onSubmit={submitHandler}>
              {loading && <Loader />}
              {error && (
                <Alert variant="danger">
                  <Alert.Heading style={{ fontSize: "15px" }}>
                    {error}
                  </Alert.Heading>
                </Alert>
              )}
              {success && (
                <Alert variant="success">
                  <Alert.Heading style={{ fontSize: "15px" }}>
                    You Updated your information
                  </Alert.Heading>
                </Alert>
              )}
              <Col>
                {" "}
                <Row>
                  {" "}
                  <Col md={6}>
                    {" "}
                    <Form.Group controlId="name">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="email">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="password">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      ></Form.Control>
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    {" "}
                    <Form.Group controlId="Age">
                      <Form.Label>Age</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Enter Age"
                        value={Age}
                        onChange={(e) => setAge(e.target.value)}
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    {" "}
                    <Form.Group controlId="city">
                      <Form.Label>city</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter city"
                        value={city}
                        onChange={(e) => setcity(e.target.value)}
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="phoneNumber">
                      <Form.Label>phoneNumber</Form.Label>
                      <PhoneInput
                        international
                        defaultCountry="LB"
                        placeholder="Enter phone number"
                        value={phoneNumber}
                        onChange={setphoneNumber}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="country">
                      <Form.Label>country</Form.Label>
                      <Select
                        options={options}
                        value={country}
                        onChange={changeHandler}
                      ></Select>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="street">
                      <Form.Label>street</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter street"
                        value={street}
                        onChange={(e) => setstreet(e.target.value)}
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Change Profile Picture</Form.Label>
                      <Form.Control
                        onChange={(e) => postDetails(e.target.files[0])}
                        id="custom-file"
                        type="file"
                        label="Upload Profile Picture"
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Col>

              {/* <Form.Group controlId="pic">
                <Form.Label>Change Profile Picture</Form.Label>
                <Form.File
                  onChange={(e) => postDetails(e.target.files[0])}
                  id="custom-file"
                  type="image/png"
                  label="Upload Profile Picture"
                  custom
                />
              </Form.Group> */}

              <Button className="mt-5 " type="submit" varient="primary">
                Update Information
              </Button>
            </Form>

            <Col
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={pic} alt={name} className="profilePic" />
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default ProfileScreen;