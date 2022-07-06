import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Protein1 from "../../img/Home/protein1.jpg"; 
import Protein2 from "../../img/Home/protein2.jpg";
import Protein3 from "../../img/Home/protein3.jpg"; 


const ProductSection = () => {
  return (
    <div class="gallery-area section-padding30">
      <Container fluid>
        <Row>
          <Col lg={12}>
            <div className="section-title">
              <h2>OUR PRODUCTS</h2>
            </div>
          </Col>
        </Row>
        <Row className="g-4">
          <Col lg={4} md={6} sm={4}>
            <div class="box snake mb-30">
              <div
                class="gallery-img big-img"
                style={{
                  backgroundImage: `url(${Protein1})`,
                }}
              ></div>
              <div class="overlay">
                <div class="overlay-content">
                  <h3>Muscle gaining </h3>
                  <Link to="/product">
                    <i class="bi bi-plus"></i>
                  </Link>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6}>
            <div className="box snake mb-30">
              <div
                className="gallery-img big-img"
                style={{
                  backgroundImage: `url(${Protein2})`,
                }}
              ></div>
              <div className="overlay">
                <div className="overlay-content">
                  <h3>Muscle gaining </h3>
                  <Link to="/product">
                    <i className="bi bi-plus"></i>
                  </Link>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6}>
            <div className="box snake mb-30">
              <div
                className="gallery-img big-img"
                style={{
                  backgroundImage: `url(${Protein3})`,
                }}
              ></div>
              <div className="overlay">
                <div className="overlay-content">
                  <h3>Muscle gaining </h3>
                  <Link to="/product">
                    <i className="bi bi-plus"></i>
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductSection;
