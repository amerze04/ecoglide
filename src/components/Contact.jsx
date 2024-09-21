import React from 'react'

const Contact = () => {
  return (
    <div id="contact" className='footer'>

        <div className="hours">
           <h1>Opening Hours</h1>
           <h2><i className="fa-regular fa-clock"></i>Monday to Friday - 9am to 9pm</h2>
           <h2><i className="fa-regular fa-clock"></i>Saturday and Sunday - 9am to 3pm</h2>
        </div>

        <div className="social">
           <h1>Contact Us</h1>
           <div className='buttons-container'>
           <div className="buttons">
            <button><i className="fa-brands fa-facebook"></i></button>
            <button><i className="fa-brands fa-instagram"></i></button>
            <button><i className="fa-brands fa-x-twitter"></i></button>
            <button><i className="fa-brands fa-youtube"></i></button>
           </div>
           <h3>Copyright  <i className="fa-brands fa-github"></i>amerze04</h3>
           </div>
        </div>

        <div className="touch">
             <h1>Get in Touch</h1>
             <h2>123 Green Street, Ecoville, EV 54321 <i className="fa-solid fa-map"></i></h2>
             <h2>info@ecoglide.com <i className="fa-solid fa-paper-plane"></i></h2>
             <h2>+1 (800) 123-4567 <i className="fa-solid fa-phone-volume"></i></h2>
        </div>

    </div>
  )
}

export default Contact