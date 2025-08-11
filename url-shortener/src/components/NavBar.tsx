import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"

import logo from "../assets/logo.svg"

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Features</Nav.Link>
            <Nav.Link href="#">Pricing</Nav.Link>
            <Nav.Link href="#">Login</Nav.Link>
            <Nav.Link href="#">Sign Up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
