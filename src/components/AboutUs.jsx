import React, { useEffect } from 'react'
import { useContext } from 'react'
import { PageContext } from '../context/Context'
import AboutUsCard from './AboutUsCard';

const AboutUs = () => {

    const {aboutUs, sectionRef} = useContext(PageContext);

    useEffect(() => {
      const observer = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add("abt-card-show");
                observer.unobserve(entry.target);
            }
        })

      }, {threshold: 0.4});

      const hiddenElements = sectionRef.current.querySelectorAll(".abt-card");
      hiddenElements.forEach(el => observer.observe(el));
    }, []);

  return (
    <div id="abt" className='abt-container'>

       {aboutUs.map((card, i) => <AboutUsCard key={i} title={card.title} text={card.text} />)}
          
    </div>
  )
}

export default AboutUs