import { Button, Form, Row, Col, Container } from "react-bootstrap"

// I don't know how to make this a background-image on a div, apparently.
import bgShorten from "../assets/bg-shorten-desktop.png"

const LinkShortener = () => {
  console.log(bgShorten)
  return (
    <Container
      className="my-4 rounded-3"
      style={{
        backgroundColor: "var(--color-dark-violet)",
        backgroundImage: `url(${bgShorten})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "168px",
      }}>
      <Form>
        <Row className="justify-content-between align-items-center">
          <Col xl="10" lg="10" md="8" sm="8" xs="8">
            <Form.Label htmlFor="linkInput" visuallyHidden>
              Link to shorten
            </Form.Label>
            <Form.Control
              id="linkInput"
              type="text"
              placeholder="Shorten a link here..."
              className="border-0"
            />
          </Col>
          <Col xl="2" lg="2" md="4" sm="4" xs="4">
            <Button
              style={{
                color: "white",
                backgroundColor: "var(--color-cyan)",
                fontWeight: "700",
              }}
              variant="primary"
              type="submit"
              className="btn rounded-3 border-0 w-100">
              Shorten It!
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  )
}

export default LinkShortener
