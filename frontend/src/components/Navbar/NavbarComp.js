// import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Nav';
// import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
// import ThemeProvider from "react-bootstrap/ThemeProvider";
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import ListGroup from "react-bootstrap/ListGroup";
// import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';

function NavbarComp () {
    return (
      <header className="header-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3">
              <div className="logo">
                <Link as="a" to="/">
                  <img src={logo} className="" alt="" />
                  {""}
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <nav className="nav-menu">
                <ul>
                  <li className="active">
                    <Link to="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link as="a" to="/about">
                      About
                    </Link>
                  </li>
                  <li>
                    <a href="./class-details.html">Classes</a>
                  </li>
                  <li>
                    <a href="./services.html">Services</a>
                  </li>
                  <li>
                    <a href="./team.html">Our Team</a>
                  </li>

                  <li>
                    <a href="./contact.html">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="canvas-open">
            <i className="fa fa-bars"></i>
          </div>
        </div>
      </header>
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