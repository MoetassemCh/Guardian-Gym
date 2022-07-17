import { useEffect, useState } from "react";
import { CartState } from "../../Context";
import { Button, Form ,Image, ListGroup, Row, Col} from "react-bootstrap";
import {AiFillDelete} from "react-icons/ai";

const Cart = () => {
  const {
    state:{cart},
    dispatch,
}=CartState();

const [total, SetTotal]=useState();

useEffect(()=>{
  //acc-accumilator curr-current
SetTotal(cart.reduce((acc, curr)=>acc + Number(curr.price)*curr.qty, 0));//0 is the intial value for acc
}, [cart]);//[cart] so it is calledwhen changes occurs in cart
  return (
  <div className="home">
    <div className="productContainer">
      <ListGroup>
        {cart.map((prod)=>(
           <ListGroup.Item key={prod.id}>
           <Row>
             <Col md={2}>
               <Image src={prod.image} alt={prod.name} fluid rounded />
             </Col>

             <Col md={2}>
               <span>{prod.name}</span>
             </Col>

             <Col md={2}>
              $ {prod.price}
              </Col>

             <Col md={2}>
               <Form.Control as="select" value={prod.qty}
                 onChange={(e) =>
                   dispatch({
                     type: "CHANGE_CART_QTY",
                     payload: {
                       id: prod.id,
                       qty: e.target.value,
                     },
                   })
                 }
               >
                 {[...Array(prod.inStock).keys()].map((x) => (
                   <option key={x + 1}>{x + 1}</option>
                 ))}
               </Form.Control>
             </Col>
             
             <Col md={2}>
               <Button
                 type="button"
                 variant="light"
                 onClick={() =>
                   dispatch({
                     type: "REMOVE_FROM_CART",
                     payload: prod,
                   })
                 }
               >
                 <AiFillDelete fontSize="20px" />
               </Button>
             </Col>
           </Row>
         </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
    <div className="filters summary">
      <span>Subtotal({cart.length}) items</span>
      <span style={{fontWeight:700, fontSize:20}}>Total:${total}</span>
      <Button type="button" variant="light" disabled={cart.length==0}>
        Proceed to  checkout
      </Button>
    </div>
  </div>
  );
};

export default Cart;