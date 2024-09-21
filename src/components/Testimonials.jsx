import React, { useContext, useEffect, useRef } from 'react'
import { PageContext } from '../context/Context'
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {


    const {users, sectionRef} = useContext(PageContext);

    useEffect(() => {

        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if(entry.isIntersecting) {
              entry.target.classList.add('test-card-show');
              observer.unobserve(entry.target);
            } 
          })
        }, {threshold: 0.25});
      
  
      const hiddenElements = sectionRef.current.querySelectorAll('.test-card');
      hiddenElements.forEach(el => observer.observe(el));

    }, []);

  return (
    <div ref={sectionRef} id="test" className='testimonials-container'>

        <h1>Hear From Our Trusted Users</h1>

        <div className="testimonials">

            {users.map((user, i) => <TestimonialCard text={user.text} image={user.image} name={user.name} key={i} />)}

        </div>

    </div>
  )
}

export default Testimonials