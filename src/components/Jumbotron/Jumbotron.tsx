import { Container, Col, Image, Row } from "react-bootstrap"
import ThemedButton from "../ThemedButton"

import illustration from "../../assets/illustration-working.svg"

const Jumbotron = () => {
  return (
    <Container fluid className="my-4">
      <Row className="align-items-center">
        <Col lg={{span: 4, offset: 1}} className="order-lg-1 order-2 text-lg-start text-center">
          <h1>More than just shorter links</h1>
          <h2 className="text-gray fs-5 mb-4" style={{lineHeight: "2rem"}}>
            <strong>
              Build your brand's recognition and get detailed insights on how
              your links are performing.
            </strong>
          </h2>
          <ThemedButton pill={true} text="Get Started" className="px-4" />
        </Col>
        <Col lg="7" className="text-center overflow-x-lg-visible overflow-x-hidden order-lg-2 order-1 mb-lg-0 mb-5">
          <Image src={illustration} />
        </Col>
      </Row>
    </Container>
  )
}

export default Jumbotron
