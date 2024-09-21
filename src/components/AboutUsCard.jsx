import React from 'react'

const AboutUsCard = (props) => {

    const {title, text} = props;

  return (
    <div className='abt-card'>

        <h1>{title}</h1>

        <h2>{title}</h2>
        <hr />
        <p>{text}</p>

    </div>
  )
}

export default AboutUsCard