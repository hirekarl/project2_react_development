import { ListGroup } from "react-bootstrap"
import type { ShortLink } from "../../types"
import ShortLinkListItem from "./ShortLinkListItem"

interface ShortLinkListProps {
  shortLinks: ShortLink[]
}

const ShortLinkList = ({ shortLinks }: ShortLinkListProps) => {
  const listItems = shortLinks?.map((link) => (
    <ShortLinkListItem key={link.id} link={link} />
  ))
  return <ListGroup>{listItems}</ListGroup>
}

export default ShortLinkList
