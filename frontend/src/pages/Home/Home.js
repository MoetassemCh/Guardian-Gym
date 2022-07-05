import Hero1 from "../../img/hero-bg.jpg";

import { Link } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Home = () => {
  return (
    <section>
      <div
        className="hero-section set-bg"
        style={{
          backgroundImage: `url(${Hero1})`,
        }}
      >
        <Container>
          <Row>
            <Col lg="8">
              <div class="hero-text">
                <span>FITNESS ELEMENTS</span>
                <h1>BMI CALCULATOR</h1>
                <p>
                  Gutim comes packed with the user-friendly BMI Calculator
                  <br /> shortcode which lets
                </p>
                <Link to="/" className="primary-btn">
                  Read More
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Home;

    