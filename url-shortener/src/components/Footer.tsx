import { Container, Row, Col, Image } from "react-bootstrap"

import logo from "../assets/logo.svg"

import iconFacebook from "../assets/icon-facebook.svg"
import iconTwitter from "../assets/icon-twitter.svg"
import iconPinterest from "../assets/icon-pinterest.svg"
import iconInstagram from "../assets/icon-instagram.svg"

const Footer = () => {
  return (
    <Container
      fluid
      style={{ backgroundColor: "var(--color-very-dark-violet)" }}>
      <Row>
        <Col lg="4">
          <div className="d-flex justify-content-center">
            <Image src={logo} style={{ filter: "brightness(0) invert(1)" }} />
          </div>
        </Col>
        <Col lg="4">
          <Row>
            <Col lg="4">
              <p style={{color: "white", fontWeight: "700"}}>Features</p>
              <ul className="list-unstyled" style={{color: "var(--color-gray)"}}>
                <li className="mb-3"><a href="#">Link Shortening</a></li>
                <li className="mb-3"><a href="#">Branded Links</a></li>
                <li className="mb-3"><a href="#">Analytics</a></li>
              </ul>
            </Col>
            <Col lg="4">
              <p style={{color: "white", fontWeight: "700"}}>Resources</p>
              <ul className="list-unstyled" style={{color: "var(--color-gray)"}}>
                <li className="mb-3"><a href="#">Blog</a></li>
                <li className="mb-3"><a href="#">Developers</a></li>
                <li className="mb-3"><a href="#">Support</a></li>
              </ul>
            </Col>
            <Col lg="4">
              <p style={{color: "white", fontWeight: "700"}}>Company</p>
              <ul className="list-unstyled" style={{color: "var(--color-gray)"}}>
                <li className="mb-3"><a href="#">About</a></li>
                <li className="mb-3"><a href="#">Our Team</a></li>
                <li className="mb-3"><a href="#">Careers</a></li>
                <li className="mb-3"><a href="#">Contact</a></li>
              </ul>
            </Col>
          </Row>
        </Col>
        <Col lg="4">
          <div className="d-flex justify-content-start gap-3">
            <a href="#"><Image src={iconFacebook} style={{ width: "1.25rem" }} /></a>
            <a href="#"><Image src={iconTwitter} style={{ width: "1.25rem" }} /></a>
            <a href="#"><Image src={iconPinterest} style={{ width: "1.25rem" }} /></a>
            <a href="#"><Image src={iconInstagram} style={{ width: "1.25rem" }} /></a>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
