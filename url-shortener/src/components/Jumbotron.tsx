import { Container, Row } from "react-bootstrap"

import illustration from "../assets/illustration-working.svg"

const Jumbotron = () => {
  return (
    <Container className="mt-3">
      <Row>
        {/* Text needs to show up in the vertical center. */}
        {/* Illustration needs to be on top when smaller than lg. */}
        <div className="col-lg-6">
          <h1 style={{ fontWeight: 700 }}>More than just shorter links</h1>
          <p>
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <button type="button" className="btn btn-primary rounded rounded-5">
            Get Started
          </button>
        </div>
        <div className="col-lg-6">
          <img src={illustration} />
        </div>
      </Row>
    </Container>
  )
}

export default Jumbotron
