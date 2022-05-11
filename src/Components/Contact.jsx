import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';

function Contact(props) {
    const navigate = useNavigate();
    const [data, setData] = useState({
        "name" : "",
        "contact" : "",
        "email": "",
        "gender": "",
        "address": "",
        "country": "",
        "describe": "",
        "message": ""
    })
    const handle = (e) =>{
        const newData = {...data};
        // console.log(newData);
        newData[e.target.id] = e.target.value;
        setData(newData);
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        axios.post("https://api-sarkaragency.herokuapp.com/api/formsubmission",{
            "name" : data.name,
            "contact" : data.contact,
            "email": data.email,
            "gender": data.gender,
            "address": data.address,
            "country": data.country,
            "describe": data.describe,
            "message": data.message
        }).then((res)=>{
            toast.success("Successful!")
            navigate("/success", {state: res.data});
        })
        // props.showAlert("Registration Successful!","success");
    }

  return (
    <div className="w3-row-padding w3-light-grey w3-padding-64 w3-container-md w3-animate-left" id="contact">
    <div className="w3-container-md ">
    <h1 className="w3-xxxlarge w3-text-red w3-center"><b>Contact</b></h1>
    <p className="w3-text-grey w3-large w3-center">Please contact us to find out how we can help your business and brand. Fill out the form and fill me in with the details. We love meeting new people:)</p>
    <div className="container-md w-50 p-2 rounded-3" style={{border: "2px solid white"}}>
    <form name="contact" onSubmit={(e) => submitHandler(e)}>
    <div className="mb-3">
        <label htmlFor="studentName" className="form-label">Name</label>
        <input type="text" onChange={(e) => handle(e)} value={data.name} className="form-control" id="name" required/>
    </div>
    <div className="mb-3">
        <label htmlFor="contact" className="form-label">Contact Number</label>
        <input type="text" onChange={(e) => handle(e)} value={data.contact} className="form-control" id="contact" required/>
    </div>
    <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="text" onChange={(e) => handle(e)} value={data.email} className="form-control" id="email" required/>
    </div>
    <div className="mb-3">
        <label htmlFor="gender" className="form-label">Gender</label>
        <input type="text" onChange={(e) => handle(e)} value={data.gender} className="form-control" id="gender" required/>
    </div>
    <div className="mb-3">
        <label htmlFor="address" className="form-label">Address</label>
        <input type="text" onChange={(e) => handle(e)} value={data.address} className="form-control" id="address" required/>
    </div>
    <div className="mb-3">
        <label htmlFor="country" className="form-label">Country</label>
        <input type="text" onChange={(e) => handle(e)} value={data.country} className="form-control" id="country" required/>
    </div>
    <div className="mb-3">
        <label htmlFor="describe" className="form-label">What best describe you?</label>
        <input type="text" onChange={(e) => handle(e)} value={data.describe} className="form-control" id="describe" required/>
    </div>
    {/* <div className="mb-3">
        <label htmlFor="help" className="form-label">How we can help you?</label>
        <input type="text" className="form-control" id="help" required/>
    </div> */}
    <div className="mb-3">
        <label htmlFor="message" className="form-label">Message</label>
        <input type="text" onChange={(e) => handle(e)} value={data.message} className="form-control" id="message" required/>
    </div>

    <center><button type="submit" className="btn btn-success">Submit</button></center>
    </form>
    </div>
    
  </div>
</div>
  )
}

export default Contact