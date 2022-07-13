
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
                  Lorem ipsum proin gravida nibh vel velit auctor aliquet.
                  Aenean pretium sollicitudin, nascetur auci elit consequat
                  ipsutissem niuis sed odio sit amet nibh vulputate cursus a
                  amet.
                </p>
                <p className="second-para">
                  Etiam rhoncus. Maecenas tempus, tellus eget condimentum
                  rhoncus, gravida quam semper libero sit amet. Etiam rhoncus.
                  Maecenas tempus, tellus eget condimentum rhoncus, gravida quam
                  semper libero sit amet.
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