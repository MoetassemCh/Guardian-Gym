import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavLink from 'react-bootstrap/esm/NavLink';
import { Link } from "react-router-dom";
import logo from "../../img/Home/guardian+logo.png";


function NavbarComp () {
    return (
        <Navbar bg="light" className="navbar" fixed="top" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to="/">
              <img src={logo} className="logo" alt="" />
              {""}
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto links">
                <NavLink className="text-black" as={Link} to="/">
                  Home
                </NavLink>
                <Nav.Link className="text-black" as={Link} to="/about">
                  About
                </Nav.Link>
                <Nav.Link className="text-black" as={Link} to="/exercises">
                  Exercises
                </Nav.Link>
                <Nav.Link className="text-black" as={Link} to="/product">
                  Product
                </Nav.Link>
                <Nav.Link className="signupbtn" as={Link} to="/signup">
                  Login
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    );
}
 
export default NavbarComp;
