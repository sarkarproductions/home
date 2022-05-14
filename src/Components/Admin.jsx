import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

function Admin(props) {

  // const [alert, setAlert] = useState(null);

  // useEffect(()=>{
  //   setTimeout(setAlert, 3000);
  // },[alert])

  const navigate = useNavigate();

  const [data, setData] = useState({
    "email": "",
    "password": ""
})

const handle = (e) =>{
    const newData = {...data};
    // console.log(newData);
    newData[e.target.id] = e.target.value;
    setData(newData);
    
}

  const login = (e) => {
    e.preventDefault();
    axios.post("https://api-sarkaragency.herokuapp.com/api/login",{
      "email": data.email,
      "password" : data.password
    })
    .then((res)=>{
      // console.log(JSON.parse(res.request.responseText));
      if(res.data.message === "Incorrect Credentials"){
        toast.error("Incorrect Password. Please try again!");
        navigate("/admin", { replace: true });
      }
      else{
        toast.success("Login Successful!");
        navigate("/dashboard", {state: res.data});
        // JSON.parse(res.request.responseText)
      }
    }).catch(error=>console.error())
  }
  return (
    <>
    <div><Toaster
      position="top-center"
      reverseOrder={false}
    /></div>
    <div className="container-md full w3-animate-right">
    <div className="container-md p-4 card" style={{width:"fit-content",border:"2px solid #f1f1f1",marginTop:"120px"}}>
    <div className="card-body">
        <center><h2 className="card-title w3-text-red">{props.heading}</h2></center>
        <form method='POST' onSubmit={(e)=>{login(e)}} >
    <div className="mb-3">
        <label htmlFor="email" className="form-label text-success">Email</label>
        <input type="email" onChange={(e) => handle(e)} value={data.email} className="form-control" id="email" aria-describedby="emailHelp" name="email" required/>
    </div>
    <div className="mb-3">
        <label htmlFor="password" className="form-label text-success">Password</label>
        <input type="password" onChange={(e) => handle(e)} value={data.password} className="form-control" id="password" name="password" required/>
    </div>
    <center><button type="submit" className="btn btn-danger">Login</button></center>
    </form>
    </div>
    </div>
    </div>
    </>
  )
}

export default Admin