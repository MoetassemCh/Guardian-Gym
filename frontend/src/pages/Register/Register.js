
import { Link } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button";

const Register = () => {
    return (  
      


        <section class="login d-flex align-items-center ">
            <div class="container mt-2">
                <div class="row justify-content-around">
                    <div class="col-xl-6 col-lg-6 d-none d-lg-block mr-auto">
                        <picture>
                            <img class="img-fluid" src="img/pexels-isaw-company-945688.jpg" alt="login to "/>
                        </picture>
                    </div>
                    <div class="col-xl-5 col-lg-6 col-md-7 col-sm-10 d-flex align-items-center px-4 px-sm-3 px-lg-4">
                        <div class="form-toggle position-relative  w-100">
                            <form action="" class="register-form" id="">
                                <fieldset id="sign-up">
                                    <div id="firstname-lastname">
                                        <label class="form-group w-50">
                                            First Name :
                                            <input type="text" name="FirstName" id="firstname" class="form-control" placeholder="john"/>
                                        </label>
                                        <label class="form-group w-50">
                                            Last Name :
                                            <input type="text" name="LastName" id="lastname" class="form-control" placeholder="doe"/>
                                        </label>
                                    </div>

                                    <label class="form-group w-100">
                                        Email
                                        <input type="text" name="email" id="" class="form-control" placeholder="john@example.com"/>
                                    </label>
                                    <label class="form-group w-100">
                                        Password
                                        <input type="password" name="password" id="" class="form-control " placeholder="*********"/>
                                    </label>


                                    <div id="country-phonenumber">
                                        <label class="form-group w-100">
                                            Region
                                            <input type="text" name="region" id="country" class="form-control " placeholder="lebanon"/>
                                        </label>

                                        <label class="form-group w-100">
                                            phonenumber
                                            <input type="text" name="phonenumber" id="phonenumber" class="form-control " placeholder="12-3432-1254"/>
                                        </label>
                                    </div>


                                    <button class="btn btn-success btn-block mb-3" type="submit" id="submit" name="submit">
                                        Sign Up
                                    </button>

                                    <p class="mb-0 text-center">
                                        Have an account? <Link to="/login" class="login-toggle">Login here</Link>
                                    </p>                                     
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>)
        
}
 
export default Register;