// import { Link } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import class1 from "../../img/Home/classes-1.jpg";
import class2 from "../../img/Home/classes-2.jpg";
import class3 from "../../img/Home/classes-4.jpg";
import { Link } from "react-router-dom";
const ExercisesSection = () => {
    return (
      <section className="classes-section classes-page spad">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="section-title">
                <h2>UNLIMITED EXERCISES</h2>
              </div>
            </Col>
          </Row>
          <Row className="classes-slider owl-carousel">
            <Col lg={4} md={6}>
              <Link to="/exercises">
                <div
                  className="single-class-item set-bg"
                  style={{
                    backgroundImage: `url(${class1})`,
                  }}
                >
                  <div className="si-text">
                    <h4>Yoga</h4>
                    <span>
                      <i className="fa fa-user"></i> Ryan Knight
                    </span>
                  </div>
                </div>
              </Link>
            </Col>
            <Col lg={4} md={6}>
              <Link to="/exercises">
                <div
                  className="single-class-item set-bg"
                  style={{
                    backgroundImage: `url(${class3})`,
                  }}
                >
                  <div className="si-text">
                    <h4>Karate</h4>
                    <span>
                      <i className="fa fa-user"></i> Kevin McCormick
                    </span>
                  </div>
                </div>
              </Link>
            </Col>
            <Col lg={4} md={6}>
              <Link to="/exercises">
                <div
                  className="single-class-item set-bg"
                  style={{
                    backgroundImage: `url(${class2})`,
                  }}
                >
                  <div className="si-text">
                    <h4>Running</h4>
                    <span>
                      <i className="fa fa-user"></i> Randy Rivera
                    </span>
                  </div>
                </div>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    );
}
 
export default ExercisesSection;