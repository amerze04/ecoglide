import React from 'react'

const TestimonialCard = (props) => {

    const {name, image, text} = props;

  return (
  <div className='test-card'>
         
         <p>{text}</p>

         <div className="profile">
            <div className="image">
                <img src={image}/>
            </div>
            <h2>{name}</h2>
         </div>

    </div>
  )
}

export default TestimonialCard