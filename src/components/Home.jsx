import React, { act, useContext, useEffect, useRef, useState } from 'react'
import { PageContext } from '../context/Context'

const Home = () => {

    const {skuter1, skuter2, skuter3} = useContext(PageContext);

    const [imageIndex, setImageIndex] = useState(0);
    const [prevImageIndex, setPrevImageIndex] = useState(2);
    
    const images = [skuter1, skuter2, skuter3];

   /*  useEffect(() => {
      const timer = setInterval(() => {
        setPrevImageIndex(prevIndex => (prevIndex === 2 ? 0 : prevIndex + 1));
        setImageIndex(prevIndex => (prevIndex === 2 ? 0 : prevIndex + 1));
      }, 3000);
  
      return () => clearInterval(timer);
    }, []); */


  return (
    <div id="home" className='home'>

        <h1><span>Your <span className="eco">eco-friendly</span></span> <br /> <span>way to glide</span> <br /> <span>through the city</span></h1>

        <div className="slider wrapper">

        <div className="slider">
         {images.map((img, i) => 
           <img key={i} src={img} 
           className= {i === imageIndex ? 'active' 
            : i === prevImageIndex ? 'previous' 
            : 'next'} 
           id={"slider-" + (i+1)}/> 
         )}
        </div>

           <div className="slider-nav">
            <div className={imageIndex === 0 ? 'active' : ''}></div>
            <div className={imageIndex === 1 ? 'active' : ''}></div>
            <div className={imageIndex === 2 ? 'active' : ''}></div>
           </div>
        </div>
    </div>
  )
}

export default Home