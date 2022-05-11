import React from 'react'
import { useLocation } from 'react-router'
import toast, { Toaster } from "react-hot-toast";

const FormSubmission = (props) => {
    const location = useLocation();
    console.log(location.state);
  return (
    <>
    <div>
        <Toaster position="top-center" reverseOrder={false} />
    </div>
    <div className="w3-row-padding w3-light-grey w3-padding-64 w3-container-md full w3-animate-bottom" id="contact" >
    <div className="w3-container-md" style={{marginTop:"10%"}}>
        {/* <h1 className="w3-xxxlarge w3-text-red w3-center"><b>Contact</b></h1> */}
            <div className="container-md w-50 p-5 rounded-3" style={{border: "2px solid white"}}>
                <center>
                    <h2 className='w3-text-red'>Hi {location.state.name}, Thank you for your interest. We will contact you shortly.</h2>
                <div className="w3-xlarge w3-padding-32">
                <p>Connect with us: &nbsp;
                <a href="http://wa.me/+918178257075"><i className="fa fa-whatsapp" aria-hidden="true"></i></a>
                <a href="https://www.instagram.com/sarkaragency/"><i className="fa fa-instagram w3-hover-opacity mx-4"></i></a>
                </p>
                </div>
                </center>
            </div>
            
        </div>
    </div>
    </>
  )
}

export default FormSubmission