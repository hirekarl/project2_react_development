import { Container, Row, Col, Image } from "react-bootstrap"

import logo from "../../assets/logo.svg"

import iconFacebook from "../../assets/icon-facebook.svg"
import iconTwitter from "../../assets/icon-twitter.svg"
import iconPinterest from "../../assets/icon-pinterest.svg"
import iconInstagram from "../../assets/icon-instagram.svg"

const Footer = () => {
  return (
    <Container
      fluid
      style={{ backgroundColor: "var(--color-very-dark-violet)" }}>
      <Row className="py-5">
        <Col lg="4">
          <div className="d-flex justify-content-center">
            <Image src={logo} style={{ filter: "brightness(0) invert(1)" }} className="logo" />
          </div>
        </Col>
        <Col lg="4">
          <Row>
            <Col lg="4">
              <p className="text-white">
                <strong>Features</strong>
              </p>
              <ul className="list-unstyled footer-link-list">
                <li>
                  <a href="#">Link Shortening</a>
                </li>
                <li>
                  <a href="#">Branded Links</a>
                </li>
                <li>
                  <a href="#">Analytics</a>
                </li>
              </ul>
            </Col>
            <Col lg="4">
              <p style={{ color: "white", fontWeight: "700" }}>Resources</p>
              <ul
                className="list-unstyled footer-link-list">
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Developers</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
              </ul>
            </Col>
            <Col lg="4">
              <p style={{ color: "white", fontWeight: "700" }}>Company</p>
              <ul
                className="list-unstyled footer-link-list">
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Our Team</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </Col>
          </Row>
        </Col>
        <Col lg="4">
          <div className="d-flex justify-content-center gap-3">
            <a href="#">
              <Image src={iconFacebook} className="footer-icon" />
            </a>
            <a href="#">
              <Image src={iconTwitter} className="footer-icon" />
            </a>
            <a href="#">
              <Image src={iconPinterest} className="footer-icon" />
            </a>
            <a href="#">
              <Image src={iconInstagram} className="footer-icon" />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
