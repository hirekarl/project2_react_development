import { ListGroup, Row, Col } from "react-bootstrap"
import type { ShortLink } from "../../types"
import ThemedButton from "../ThemedButton"

interface ShortLinkListProps {
  shortLinks: ShortLink[]
}

const ShortLinkList = ({ shortLinks }: ShortLinkListProps) => {
  const listItems = shortLinks?.map((link) => (
    <ListGroup.Item key={link.id} className="p-3 w-100">
      <Row className="align-items-center">
        <Col lg="8" md="6" className="mb-md-0 mb-xs-1">
          <div className="text-very-dark-violet"><strong>{link.long_url}</strong></div>
        </Col>
        <Col lg="4" md="6" className="mb-md-0 mb-xs-1">
          <div className="d-flex justify-content-end align-items-center gap-2">
            <div className="text-cyan">
              <strong>{link.link}</strong>
            </div>
            <ThemedButton text="Copy" />
          </div>
        </Col>
      </Row>
    </ListGroup.Item>
  ))
  return <ListGroup>{listItems}</ListGroup>
}

export default ShortLinkList
