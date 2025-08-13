import { Container } from "react-bootstrap"
import ThemedButton from "../ThemedButton"

import boostDesktop from "../../assets/bg-boost-desktop.png"

const CallToAction = () => {
  return (
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
        <ThemedButton pill={true} text="Get Started" />
      </div>
    </Container>
  )
}

export default CallToAction
