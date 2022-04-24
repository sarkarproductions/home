import React from 'react'

function LandingPage(props) {
  return (
    <>
    <header className="w3-container w3-center" style={{padding: "128px 16px"}}>
    <h1 className="w3-margin w3-jumbo" style={{fontFamily:"Montserrat"}}>{props.title}</h1>
    <p className="w3-xlarge">{props.slogan}</p>
    <button className="w3-button w3-black w3-padding-large w3-large w3-margin-top"><a href="#services" className='text-light'>Get Started</a></button>
    </header>
    </>
  )
}

export default LandingPage