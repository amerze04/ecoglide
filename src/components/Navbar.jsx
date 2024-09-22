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

    function turnNavbarOff() {

      navbarItems.current.style.maxHeight = "0";
      setToggleNavbar(false);
      
  }

  return (
    <div className='nav'>

        <img src={logo} alt="logo"></img>

        <ul ref={navbarItems}>
            <li><a onClick={turnNavbarOff} href="#home">Home</a></li>
            <li><a onClick={turnNavbarOff} href="#abt">About Us</a></li>
            <li><a onClick={turnNavbarOff} href="#sust">Sustainability</a></li>
            <li><a onClick={turnNavbarOff} href="#test">Testimonials</a></li>
            <li><a onClick={turnNavbarOff} href="#contact">Contact</a></li>
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