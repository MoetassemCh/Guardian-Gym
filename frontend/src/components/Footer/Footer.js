
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import footer from "../../img/Home/footer-signup.jpg";

const Footer = () => {
    
    return (
      <footer class="footer-section">
        <Container>
          <Row>
            <Col md={4}>
              <div className="contact-option">
                <span>Phone</span>
                <p>(123) 118 9999 - (123) 118 9999</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="contact-option">
                <span>Address</span>
                <p>72 Kangnam, 45 Opal Point Suite 391</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="contact-option">
                <span>Email</span>
                <p>contactcompany@Gutim.com</p>
              </div>
            </Col>
          </Row>
          <div
            className="subscribe-option set-bg"
            style={{
              backgroundImage: `url(${footer})`,
            }}
          >
            <div className="so-text">
              <h4>Subscribe To Our Mailing List</h4>
              <p>Sign up to receive the latest information </p>
            </div>
            <form action="#" className="subscribe-form">
              <input type="text" placeholder="Enter Your Mail" />
              <button type="submit">
                <i class="fa fa-send"></i>
              </button>
            </form>
          </div>
          <div className="copyright-text">
            <ul>
              <li>
                <Link to="#">Term & Use</Link>
              </li>
              <li>
                <Link to="#">Privacy Policy</Link>
              </li>
            </ul>
            <p>
              <p>
                &copy; Link back to Colorlib can't be removed. Template is
                licensed under CC BY 3.0. Copyright &copy; All rights reserved |
                This template is made with{" "}
                <i class="fa fa-heart" aria-hidden="true"></i> by{" "}
                <Link to="/" target="_blank">
                  Guardian
                </Link>
                Link back to Colorlib can't be removed. Template is licensed
                under CC BY 3.0.
              </p>
            </p>
            <div className="footer-social">
              <Link to="/">
                <i className="bi bi-facebook"></i>
              </Link>
              <Link to="/">
                <i className="bi bi-twitter"></i>
              </Link>
              <Link to="/">
                <i className="bi bi-instagram"></i>
              </Link>
              <Link to="/">
                <i className="bi bi-dribbble"></i>
              </Link>
            </div>
          </div>
        </Container>
      </footer>
    );
}
 
export default Footer ;