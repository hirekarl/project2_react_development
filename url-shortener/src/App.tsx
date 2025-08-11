import "./App.css"

import NavBar from "./components/NavBar"
import Jumbotron from "./components/Jumbotron"
import LinkShortener from "./components/LinkShortener"
import Info from "./components/Info"
import CallToAction from "./components/CallToAction"
import Footer from "./components/Footer"

const App = () => {
  return (
    <>
      <NavBar />
      <Jumbotron />
      <LinkShortener />
      <Info />
      <CallToAction />
      <Footer />
    </>
  )
}

export default App
