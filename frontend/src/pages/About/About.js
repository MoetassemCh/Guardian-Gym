import Hero1 from "../../img/hero-bg.jpg";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import * as Icon from "react-bootstrap-icons";


const About = () => {
  return (
    <section>
      <div
        className="about-section setA-bg"
        style={{
          backgroundImage: `url(${Hero1})`,
        }}
      >
        <Container>
          <Row>
            <Col lg="12">
              <div className="breadcrumb-text">
                <h2>About</h2>
                <div className="breadcrumb-option">
                  <Link to="/">
                    <i className="bi bi-house"></i> Home
                  </Link>
                  <i className="bi bi-arrow-right-circle text-white"></i>{" "}
                  <span>About</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default About;
