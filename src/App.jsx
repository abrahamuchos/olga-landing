import './styles/App.css'
import Hero from "./components/Hero.jsx";
import Bus from "./components/Bus.jsx";
import Events from "./components/Events.jsx";
import SpecialGuest from "./components/SpecialGuest.jsx";
import Games from "./components/Games.jsx";
import Footer from "./components/Footer.jsx";

function App() {

  return (
    <main>
      <Hero/>
      <Bus/>
      <Events/>
      <SpecialGuest/>
      <Games/>
      <Footer/>
    </main>
  )
}

export default App
