import { Button, Container, Col, Image, Row } from "react-bootstrap"

import illustration from "../assets/illustration-working.svg"

const Jumbotron = () => {
  return (
    <Container className="my-4">
      <Row>
        {/* Text needs to show up in the vertical center. */}
        {/* Illustration needs to be on top when smaller than lg. */}
        <Col lg="6">
          <h1>More than just shorter links</h1>
          <p style={{ color: "var(--color-grayish-violet)" }}>
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <Button
            variant="primary"
            className="rounded-pill border-0 px-4"
            style={{ backgroundColor: "var(--color-cyan)", fontWeight: "700" }}>
            Get Started
          </Button>
        </Col>
        <Col lg="6">
          <Image src={illustration} />
        </Col>
      </Row>
    </Container>
  )
}

export default Jumbotron
