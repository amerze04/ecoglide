import React, {useContext, useEffect} from "react";
import { PageContext } from "../context/Context";

const Sustainability = () => {

  const {sectionRef} = useContext(PageContext);

  useEffect(() => {

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          entry.target.classList.add('test-card-show');
          observer.unobserve(entry.target);
        } 
      })
    }, {threshold: 0.4});
  

  const hiddenElements = [sectionRef.current.querySelector('.first'), sectionRef.current.querySelector('.second'), sectionRef.current.querySelector('.third')];
  hiddenElements.forEach(el => observer.observe(el));

}, []);

  return (
    <div id="sust" className="sustainability-container">
        <h1>Sustainability - Why It's Important</h1>
        <div className="sustainability">
      <div className="first">
        At <span>Eco<span>Glide</span></span> we are committed to reducing the environmental
        impact of urban transportation. Our eco-friendly electric scooters help
        lower CO2 emissions and energy consumption, offering a greener
        alternative to traditional vehicles.
      </div>

      <div className="second">
        We carefully select sustainable materials in the production of our
        scooters, ensuring minimal waste and maximizing recyclability. Our focus
        is on using responsibly sourced components that align with our mission
        for a cleaner planet.
      </div>

      <div className="third">
        In partnership with cities and organizations worldwide, we actively
        promote sustainable mobility solutions, working to create cleaner, more
        efficient urban transportation systems. Together, we're paving the way
        for a greener future.
      </div>
    </div>
    </div>
  );
};

export default Sustainability;
