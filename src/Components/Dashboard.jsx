import axios from "axios";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import Admin from "./Admin";

const Dashboard = (props) => {
  const [formData, setFormData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    axios.get("https://api-sarkaragency.herokuapp.com/api/formsubmission").then((response) => {
      setFormData(response.data);
    });
  }, []);

  const print = () => {
    window.print();
  };

  if (location.state != null) {
    return (
      <>
        <div>
          <Toaster position="top-center" reverseOrder={false} />
        </div>

        <div className="container-md mt-50 w-100 my-3 mt-5 w3-animate-zoom">
          <div className="container-fluid">
            <p style={{ float: "right", fontSize: "24px" }}>
              Welcome<b className="w3-text-red"> {location.state.name}</b>
            </p>
          </div>
          <br/>
          <div>
            <center><h3 className="form w3-text-red">Form Submission Data</h3></center>
            <div className="table-responsive">
            <table className="table">
              <thead className="table-danger">
                <tr>
                  <th scope="col">Full Name</th>
                  <th scope="col">Contact</th>
                  <th scope="col">Email</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Address</th>
                  <th scope="col">Country</th>
                  <th scope="col">Description</th>
                  <th scope="col">Message</th>
                </tr>
              </thead>
              {formData.map((value) => {
                return (
                  <tbody>
                    <tr>
                      <td>{value.name}</td>
                      <td>{value.contact}</td>
                      <td>{value.email}</td>
                      <td>{value.gender}</td>
                      <td>{value.address}</td>
                      <td>{value.country}</td>
                      <td>{value.describe}</td>
                      <td>{value.message}</td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
            </div>
          </div>
        </div>

        <center style={{ marginBottom: "100px" }}>
          <button
            className="nav-link text-light bg-danger mt-5"
            onClick={print}
            style={{
              border: "2px solid green",
              padding: "10px",
              borderRadius: "9px",
              width: "80px",
            }}
          >
            Print
          </button>
        </center>
      </>
    );
  } else {
    return <Admin heading="Admin Login Portal" />;
  }
};

export default Dashboard;
