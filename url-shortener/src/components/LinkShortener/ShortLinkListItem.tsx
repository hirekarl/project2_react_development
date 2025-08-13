import { Row, Col, ListGroup } from "react-bootstrap"
import ThemedButton from "../ThemedButton"
import type { ShortLink } from "../../types"
import { useState } from "react"

interface ShortLinkListItemProps {
  link: ShortLink
}

const ShortLinkListItem = ({ link }: ShortLinkListItemProps) => {
  const [copied, setCopied] = useState<boolean>(false)

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(link.link)
      setCopied(true)
    } catch (error) {
      console.error("Couldn't save to clipboard:", error)
    }
  }

  return (
    <ListGroup.Item className="p-2 w-100">
      <Row className="align-items-center">
        <Col lg="8" md="6" className="mb-md-0 mb-xs-1">
          <div className="long-url">{link.long_url}</div>
        </Col>
        <Col lg="4" md="6" className="mb-md-0 mb-xs-1">
          <div className="d-flex justify-content-end align-items-center gap-2">
            <div className="short-url">{link.link}</div>
            <ThemedButton
              text={copied ? "Copied!" : "Copy"}
              backgroundColor={
                copied ? "var(--color-dark-violet)" : "var(--color-cyan)"
              }
              onClick={handleClick}
            />
          </div>
        </Col>
      </Row>
    </ListGroup.Item>
  )
}

export default ShortLinkListItem
