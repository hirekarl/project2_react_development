import { Card } from "react-bootstrap"

interface InfoCardProps {
  icon: string
  headingText: string
  bodyText: string
}

const InfoCard = ({ icon, headingText, bodyText }: InfoCardProps) => {
  return (
    <div className="d-flex justify-content-center">
      <Card className="mb-3 p-3 border-0" style={{ width: "17.5rem" }}>
        <Card.Img
          className="info-icon p-2 rounded rounded-circle"
          variant="top"
          src={icon}
        />
        <Card.Body>
          <Card.Title style={{ color: "var(--color-very-dark-blue)" }}>
            {headingText}
          </Card.Title>
          <Card.Text style={{ color: "var(--color-grayish-violet)" }}>
            {bodyText}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default InfoCard
