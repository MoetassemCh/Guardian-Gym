import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
// import NavDropdown from "react-bootstrap/NavDropdown";
import NavLink from 'react-bootstrap/esm/NavLink';
import { Link } from "react-router-dom";
import logo from "../../img/guardian+logo.png"
// import Button from "react-bootstrap/Button"
// import logo from "../../img/logo.png";
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import ListGroup from "react-bootstrap/ListGroup";
// import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';

function NavbarComp () {
    return (
      <div className="navbar">
        <Navbar bg="light" fixed="top" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to="/">
              <img src={logo} className="logo" alt="" />
              {""}
            </Navbar.Brand>
            <div className="links">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto ">
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
                  <Nav.Link className="signupbtn" as={Link} to="/">
                   Login
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </div>
          </Container>
        </Navbar>
      </div>
    );
}
 
export default NavbarComp;
  // <Navbar>
      //   <header class="header-section">
      //     <Container fluid>
      //       <Row>
      //         <Col lg="3">
      //           <div className="logo">
      //             <Navbar.Brand as={Link} to="/">
      //               <img src={logo} className="" alt="" />
      //               {""}
      //             </Navbar.Brand>
      //           </div>
      //         </Col>
      //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
      //         <Navbar.Collapse id="basic-navbar-nav">
      //           <Col lg="6">
      //             <div className="nav-menu">
      //               <ListGroup as="ul">
      //                 <ListGroup.Item as="li">
      //                   <Link to="/about"></Link>
      //                   About us
      //                 </ListGroup.Item>
      //               </ListGroup>
      //             </div>
      //           </Col>
      //         </Navbar.Collapse>
      //       </Row>
      //     </Container>
      //   </header>
      // </Navbar>