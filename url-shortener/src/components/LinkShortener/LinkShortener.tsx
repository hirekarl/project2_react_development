import { Button, Form, Row, Col, Container } from "react-bootstrap"

import bgShorten from "../../assets/bg-shorten-desktop.png"

const LinkShortener = () => {
  console.log(bgShorten)
  return (
    <Container
      className="mt-4 mb-3 px-2 rounded-2"
      style={{
        backgroundColor: "var(--color-dark-violet)",
        backgroundImage: `url(${bgShorten})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%",
      }}>
        <Form className="p-4">
          <Row className="align-items-center">
            <Col xl="10" lg="10" md="8" sm="12" className="mb-1">
              <Form.Label htmlFor="linkInput" visuallyHidden>
                Link to shorten
              </Form.Label>
              <Form.Control
                id="linkInput"
                type="text"
                placeholder="Shorten a link here..."
                className="border-0 rounded-2 p-2"
              />
            </Col>
            <Col xl="2" lg="2" md="4" sm="12" className="mb-1">
              <Button
                style={{
                  color: "white",
                  backgroundColor: "var(--color-cyan)",
                  fontWeight: "700",
                }}
                variant="primary"
                type="submit"
                className="btn rounded-2 p-2 border-0 w-100">
                Shorten It!
              </Button>
            </Col>
          </Row>
        </Form>
    </Container>
  )
}

export default LinkShortener
