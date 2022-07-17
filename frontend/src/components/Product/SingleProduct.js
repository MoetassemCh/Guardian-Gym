import { Card,Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartState} from "../../Context";

const SingleProduct = ({prod}) => {
  const {
    state :{cart},
     dispatch,
    } = CartState();

  return (
    <div className="products">
        <Card>
            <Link to={`/product/${prod.id}`}>
            <Card.Img variant="top" src={prod.image} alt={prod.name}/>
            </Link>
            <Card.Body>
              <Link to={`/product/${prod.id}`}>
               <Card.Title>{prod.name}</Card.Title>
              </Link>
               <Link to={`/product/${prod.id}`}>
               <Card.Subtitle style={{ paddingBottom: 10 }}>
                  <span>$ {prod.price.split(".")[0]}</span>
               </Card.Subtitle>
               </Link>
               { //some helps in finding if this this thing is in the array or not
               //check if the product id in the cart is present in the product list ,if so remove it if not present ad it
                cart.some(p=>p.id === prod.id)?(
                  <Button variant="danger" className="used" disabled={!prod.inStock}>{!prod.inStock ? "Out of stock": "added" }</Button>
                ):(
                  //on clicking display dispatch function the takes type and data 
                  <Button onClick={()=>{
                    dispatch({
                      type:"ADD_TO_CART",
                      payload:prod,
                    });
                  }} 
                  disabled={!prod.inStock}>{!prod.inStock ? "Out of stock": "Add to cart" }</Button>
                )
               }

            </Card.Body>
            
        </Card>
    </div>
  )
}

export default SingleProduct;