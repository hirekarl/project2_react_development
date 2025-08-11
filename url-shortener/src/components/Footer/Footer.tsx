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
      <Row className="pt-5 pb-5">
        <Col lg="4">
          <div className="d-flex justify-content-center">
            <Image src={logo} style={{ filter: "brightness(0) invert(1)" }} />
          </div>
        </Col>
        <Col lg="4">
          <Row>
            <Col lg="4">
              <p style={{ color: "white", fontWeight: "700" }}>Features</p>
              <ul
                className="list-unstyled"
                style={{ color: "var(--color-gray)", lineHeight: "2.5" }}>
                <li>
                  <a style={{color: "var(--color-gray)", textDecoration: "none"}} href="#">Link Shortening</a>
                </li>
                <li>
                  <a style={{color: "var(--color-gray)", textDecoration: "none"}} href="#">Branded Links</a>
                </li>
                <li>
                  <a style={{color: "var(--color-gray)", textDecoration: "none"}} href="#">Analytics</a>
                </li>
              </ul>
            </Col>
            <Col lg="4">
              <p style={{ color: "white", fontWeight: "700" }}>Resources</p>
              <ul
                className="list-unstyled"
                style={{ color: "var(--color-gray)", lineHeight: "2.5" }}>
                <li>
                  <a style={{color: "var(--color-gray)", textDecoration: "none"}} href="#">Blog</a>
                </li>
                <li>
                  <a style={{color: "var(--color-gray)", textDecoration: "none"}} href="#">Developers</a>
                </li>
                <li>
                  <a style={{color: "var(--color-gray)", textDecoration: "none"}} href="#">Support</a>
                </li>
              </ul>
            </Col>
            <Col lg="4">
              <p style={{ color: "white", fontWeight: "700" }}>Company</p>
              <ul
                className="list-unstyled"
                style={{ color: "var(--color-gray)", lineHeight: "2.5" }}>
                <li>
                  <a style={{color: "var(--color-gray)", textDecoration: "none"}} href="#">About</a>
                </li>
                <li>
                  <a style={{color: "var(--color-gray)", textDecoration: "none"}} href="#">Our Team</a>
                </li>
                <li>
                  <a style={{color: "var(--color-gray)", textDecoration: "none"}} href="#">Careers</a>
                </li>
                <li>
                  <a style={{color: "var(--color-gray)", textDecoration: "none"}} href="#">Contact</a>
                </li>
              </ul>
            </Col>
          </Row>
        </Col>
        <Col lg="4">
          <div className="d-flex justify-content-center gap-3">
            <a href="#">
              <Image src={iconFacebook} style={{ width: "1.25rem" }} />
            </a>
            <a href="#">
              <Image src={iconTwitter} style={{ width: "1.25rem" }} />
            </a>
            <a href="#">
              <Image src={iconPinterest} style={{ width: "1.25rem" }} />
            </a>
            <a href="#">
              <Image src={iconInstagram} style={{ width: "1.25rem" }} />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
