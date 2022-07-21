
import { Link } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AboutPic from "../../img/Home/about-pic.jpg";

const AboutSection = () => {
    return (
      <section className="about-section1 spad">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="about-pic">
                <img src={AboutPic} alt="" />
              </div>
            </Col>
            <Col lg={6}>
              <div className="about-text">
                <h2>Story About Us</h2>
                <p className="first-para">
                  Today’s rental experience is broken. It’s outdated,
                  exhausting, and slow. We spend hours of our lives searching
                  just to settle for places that don’t feel like home. The
                  nightmare ends now. Rento is on a mission to change the way
                  you rent, forever. To make it easier, faster, and more human.
                  By making this vision a reality, we’re creating opportunity
                  for everyone to live better—from one fresh start to the next.
                </p>
                <Link to="/about" className="primary-btn1">
                  Read More
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
}
 
export default AboutSection;