import "./App.css"

import NavBar from "./components/NavBar/NavBar"
import Jumbotron from "./components/Jumbotron/Jumbotron"
import LinkShortener from "./components/LinkShortener/LinkShortener"
import Info from "./components/Info/Info"
import CallToAction from "./components/CallToAction/CallToAction"
import Footer from "./components/Footer/Footer"

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
