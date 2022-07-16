import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Card } from "react-bootstrap";

const ProductAll = ({ product }) => {
  return (
    <section className="py-5">
      <Container className="px-4 px-lg-5 mt-5">
        <Row className="gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          <Col className="mb-5">
            <Card className="h-100">
              <img className="card-img-top" src={product.image} alt="" />

              <Card.Body className="card-body p-4">
                <div className="text-center">
                  <h5 className="fw-bolder">{product.name}</h5>
                  <>${product.price}</>
                  <p className="description">{product.description}</p>
                </div>
              </Card.Body>

              <Card.Footer className="p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                  <Link className="btn btn-outline-dark mt-auto" to="/">
                    View options
                  </Link>
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductAll;
