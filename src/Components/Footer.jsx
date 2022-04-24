import React from 'react'

function Footer(props) {
  return (
      <>
    <div className="w3-container w3-black w3-center w3-opacity w3-padding-64">
    <h1 className="w3-margin w3-xlarge">Quote of the day: Everything you do now is for your future</h1>
    </div>

{/* <!-- Footer --> */}
<footer className="w3-container w3-padding-64 w3-center w3-opacity">  
  <div className="w3-xlarge w3-padding-32">
      <p>Connect with us: &nbsp;
    <a href="http://wa.me/+918178257075"><i className="fa fa-whatsapp" aria-hidden="true"></i></a>
    <a href="https://www.instagram.com/sarkaragency/"><i className="fa fa-instagram w3-hover-opacity mx-4"></i></a>
    </p>
 </div>
 <p>Designed and Developed by <a href="https://github.com/techiemanish" target="_blank">techiemanish</a></p>
</footer>
</>
  )
}

export default Footer