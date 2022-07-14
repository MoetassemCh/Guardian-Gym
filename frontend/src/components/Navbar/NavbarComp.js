import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavLink from 'react-bootstrap/esm/NavLink';
import { Link } from "react-router-dom";
import logo from "../../img/Home/guardian+logo.png";
import {useDispatch,useSelector} from "react-redux"
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from 'react-router-bootstrap' ;
import {logout} from '../../actions/userActions'
import { Image } from 'react-bootstrap';

function NavbarComp () {
const dispatch=useDispatch()
  const userLogin=useSelector(state=>state.userLogin)
  const{userInfo}=userLogin

  const logoutHandler=()=>{
  dispatch(logout());
  }

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
              {userInfo ? (
                <>
                  <Image
                    src={userInfo.pic}
                    width="50"
                    height="50"
                    className="d-inline-block align-top img-fluid rounded-circle"
                    alt=""
                  />
                  <NavDropdown
                    title={userInfo.name}
                    id="name"
                    className="text-black"
                  >
                    <LinkContainer to="/profile">
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <Nav.Link className="signupbtn" as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}
 
export default NavbarComp;
