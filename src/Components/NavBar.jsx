import { useState } from "react";
import React from 'react'
import { Link } from "react-router-dom";

function NavBar(props) {
    const [display, setDisplay] = useState("w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium w3-large");
    const myFunction =() => {
        if(display === "w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium w3-large"){
            setDisplay("w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium w3-large w3-show");
        }
        else{
            setDisplay("w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium w3-large");
        }
      }
  return (
    <>
    <div className="w3-top">
  <div className="w3-bar w3-red w3-card w3-left-align w3-large">
    <a className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-red" href={void(0)} onClick={myFunction} title="Toggle Navigation Menu"><i className="fa fa-bars"></i></a>
    <a href="/" className="w3-bar-item w3-button w3-padding-large w3-white">{props.heading}</a>
    {/* <!--<a href="#showcase" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Showcases</a>--> */}
    <Link to="/services" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">{props.arg1}</Link>
    <Link to="/about" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">{props.arg2}</Link>
    <Link to="/contact" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">{props.arg3}</Link>
    <a style={{float:"right"}} className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" href="https://www.instagram.com/sarkaragency/"><i className="fa fa-instagram w3-hover-opacity"></i></a>
    <a style={{float:"right"}} className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" href="http://wa.me/+918178257075"><i className="fa fa-whatsapp" aria-hidden="true"></i></a>
  </div>
  {/* <div class="w3-xlarge w3-padding-32" style={{float:"right"}}></div> */}
  <div id="navDemo" className={display}>
    {/* <!--<a href="#showcase" className="w3-bar-item w3-button w3-padding-large">Showcases</a>--> */}
    <Link to="/services" className="w3-bar-item w3-button w3-padding-large">Services</Link>
    <Link to="/about" className="w3-bar-item w3-button w3-padding-large">About</Link>
    <Link to="/contact" className="w3-bar-item w3-button w3-padding-large">Contact us</Link>
    <a style={{float:"right"}} className="w3-bar-item w3-button w3-padding-large" href="https://www.instagram.com/sarkaragency/">Instagram <i className="fa fa-instagram w3-hover-opacity"></i></a>
    <a style={{float:"right"}} className="w3-bar-item w3-button w3-padding-large" href="http://wa.me/+918178257075">WhatsApp <i className="fa fa-whatsapp" aria-hidden="true"></i></a>
  </div>
</div>
    </>
  )
}

export default NavBar