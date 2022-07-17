import React from 'react'
import {Container, Navbar, Form, Dropdown, Badge, Button} from "react-bootstrap";
import {FaShoppingCart} from "react-icons/fa";
import {Link} from "react-router-dom"
import { CartState } from '../../Context';


//variant is to let the text white when it is value is dark
const Header = () => {

  const{
    state:{cart},
    productDispatch,
}=CartState();
  return (
    <Navbar bg="dark" variant="dark" height="80" >
        <Container >
          <Link to='/product'>
          <Navbar.Brand >Shopping Cart</Navbar.Brand>
          </Link>
          
          <Form>
            <Form.Group className="mb-3 search">
                <Form.Control
                 style={{width: 500}}
                 placeholder="search for a product"
                 className="m-auto"
                 onChange={(e)=>{
                  productDispatch({
                    type:"FILTER_BY_SEARCH",
                    payload:e.target.value,
                  });
                 }}
                 />
           </Form.Group>
          </Form>
           
          
          <Dropdown align="end">
            <Dropdown.Toggle variant="danger">
            <Link to="/cart" >
              <Button  className="cartButton" variant="danger">
                <FaShoppingCart color='white' bg="danger"  fontSize="25px"/>
                <Badge color='white' bg="danger">{cart.length}</Badge>
                </Button>
              </Link>
            </Dropdown.Toggle>
           
            </Dropdown>
        </Container>
      </Navbar>
  )
}

export default Header;