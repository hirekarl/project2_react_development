import { Container, Image, Nav, Navbar } from "react-bootstrap"
import ThemedButton from "../ThemedButton"

import logo from "../../assets/logo.svg"

const NavBar = () => {
  return (
    <Navbar expand="md">
      <Container className="py-3">
        <Navbar.Brand href="#home">
          <Image src={logo} className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="align-items-center justify-content-start">
          <Nav className="me-auto align-items-center">
            <Nav.Link href="#">Features</Nav.Link>
            <Nav.Link href="#">Pricing</Nav.Link>
          </Nav>
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#">Login</Nav.Link>
            <Nav.Link href="#">
              <ThemedButton pill={true} text="Sign Up" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
