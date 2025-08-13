import { Container, Row, Col } from "react-bootstrap"
import InfoCard from "./InfoCard"

import iconBrandRecognition from "../../assets/icon-brand-recognition.svg"
import iconDetailedRecords from "../../assets/icon-detailed-records.svg"
import iconFullyCustomizable from "../../assets/icon-fully-customizable.svg"

const Info = () => {
  return (
    <>
      <Container fluid className="py-4 bg-light">
        <Container className="my-5">
          <h3 className="text-center">Advanced Statistics</h3>
          <h4
            className="text-center text-gray fs-5"
            style={{ fontWeight: 700 }}>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </h4>
        </Container>
        <Container className="my-5">
          <Row>
            <Col lg="4" className="px-3 mb-3">
              <InfoCard
                icon={iconBrandRecognition}
                headingText="Brand Recognition"
                bodyText="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content."
              />
            </Col>
            <Col lg="4" className="px-3 mb-3">
              <InfoCard
                icon={iconDetailedRecords}
                headingText="Detailed Records"
                bodyText="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
              />
            </Col>
            <Col lg="4" className="px-3 mb-3">
              <InfoCard
                icon={iconFullyCustomizable}
                headingText="Fully Customizable"
                bodyText="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  )
}

export default Info
