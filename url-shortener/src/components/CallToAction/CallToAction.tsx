import { Button, Container } from "react-bootstrap"

import boostDesktop from "../../assets/bg-boost-desktop.png"

const CallToAction = () => {
  return (
    // Fix non-working background image.
    <Container
      fluid
      className="text-center d-flex flex-column"
      style={{
        height: "100%",
        backgroundColor: "var(--color-dark-violet)",
        backgroundImage: `url(${boostDesktop}`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}>
      <div className="py-5">
        <h2 className="mt-5 mb-2 text-white">Boost your links today</h2>
        <Button
          variant="primary"
          type="button"
          style={{ backgroundColor: "var(--color-cyan)", fontWeight: "700" }}
          className="rounded-pill border-0 mt-2 mb-5">
          Get Started
        </Button>
      </div>
    </Container>
  )
}

export default CallToAction
