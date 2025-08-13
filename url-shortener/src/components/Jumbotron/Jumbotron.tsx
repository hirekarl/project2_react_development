import { Container, Col, Image, Row } from "react-bootstrap"
import ThemedButton from "../ThemedButton"

import illustration from "../../assets/illustration-working.svg"

const Jumbotron = () => {
  return (
    <Container className="my-4">
      <Row className="align-items-center">
        <Col lg="6">
          <h1>More than just shorter links</h1>
          <p className="text-gray">
            <strong>
              Build your brand's recognition and get detailed insights on how
              your links are performing.
            </strong>
          </p>
          <ThemedButton pill={true} text="Get Started" className="px-4" />
        </Col>
        <Col lg="6" className="overflow-x-hidden">
          <Image src={illustration} />
        </Col>
      </Row>
    </Container>
  )
}

export default Jumbotron
