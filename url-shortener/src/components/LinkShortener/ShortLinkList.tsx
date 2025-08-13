import { ListGroup } from "react-bootstrap"

import type { ShortLink } from "../../types"

interface ShortLinkListProps {
  shortLinks: ShortLink[]
}

const ShortLinkList = ({ shortLinks }: ShortLinkListProps) => {
  const listItems = shortLinks?.map((link) => (
    <ListGroup.Item key={link.id}>
      <a href={link.long_url}>{link.long_url}</a>&nbsp;
      <i className="bi bi-arrow-right text-danger"></i>&nbsp;
      <a href={link.link}>
        <strong>{link.link}</strong>
      </a>
    </ListGroup.Item>
  ))
  return <ListGroup>{listItems}</ListGroup>
}

export default ShortLinkList
