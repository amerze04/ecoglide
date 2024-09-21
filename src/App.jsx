import { useContext } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Sustainability from "./components/Sustainability";
import Testimonials from "./components/Testimonials";
import { PageContext } from "./context/Context";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";

function App() {

  const {sectionRef} = useContext(PageContext);
  return (
    <>
      <section ref={sectionRef}>
        <Navbar />
        <Home />
        <AboutUs />
        <Sustainability />
        <Testimonials />
        <Contact />
      </section>
    </>
  );
}

export default App;
