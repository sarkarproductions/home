import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage(props) {
  const animation = () =>{
    let text = props.title;
    console.log(text);
  }
  return (
    <>
    <header className="w3-container w3-center" style={{padding: "128px 16px"}}>
    <h1 className="w3-margin w3-jumbo w3-animate-top" onClick={animation} style={{fontFamily:"Montserrat"}}>{props.title}</h1>
    <p className="w3-xlarge w3-animate-left">{props.slogan}</p>
    <div className="container">
    <button className="w3-button w3-black w3-padding-large w3-large w3-margin-top mx-2"><Link to="/services" className='text-light'>Get Started</Link></button>
    <button className="w3-button w3-black w3-padding-large w3-large w3-margin-top"><Link to="/contact" className='text-light'>Contact Us</Link></button>
    </div>
    </header>
    </>
  )
}

export default LandingPage