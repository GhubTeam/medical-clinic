import About from "./Components/About/About"
import BookAppointment from "./Components/BookAppointment/BookAppointment"
import Footer from "./Components/Footer/Footer"
import Hero from "./Components/Hero/Hero"
import NavBar from "./Components/NavBar/NavBar"
import Review from "./Components/Reviews/Review"
import Services from "./Components/Services/Services"
import Team from "./Components/Team/Team"


function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <BookAppointment />
      <Services />
      <Team />
      <Review />
      <Footer/>
    </div>
  );
}

export default App