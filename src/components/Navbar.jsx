import React, { useContext, useRef, useState } from 'react'
import { PageContext } from '../context/Context'

const Navbar = () => {

    const {logo} = useContext(PageContext);

   const [toggleNavbar, setToggleNavbar] = useState(false);
   const navbarItems = useRef();

    function displayNavbar() {

        navbarItems.current.style.maxHeight = toggleNavbar ? "0" : "250px";
        setToggleNavbar(!toggleNavbar);
        
    }

  return (
    <div className='nav'>

        <img src={logo} alt="logo"></img>

        <ul ref={navbarItems}>
            <li><a href="#home">Home</a></li>
            <li><a href="#abt">About Us</a></li>
            <li><a href="#sust">Sustainability</a></li>
            <li><a href="#test">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        
        <div onClick={displayNavbar} className={toggleNavbar ? "toggle-navbar-active" : "toggle-navbar"}>
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
        </div>
    </div>
  )
}

export default Navbar