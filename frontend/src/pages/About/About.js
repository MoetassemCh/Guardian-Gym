import Hero1 from "../../img/Home/hero-bg.jpg";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AboutPic from "../../img/Home/about-pic.jpg";

// import * as Icon from "react-bootstrap-icons";

const About = () => {
  return (
    <>
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
                  semper libero sit amet.lorem Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Pariatur minima a aspernatur
                  ipsam quasi et rem, placeat mollitia. Assumenda quia deserunt
                  nemo dolor, quisquam doloribus possimus magnam eveniet
                  recusandae saepe?
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
