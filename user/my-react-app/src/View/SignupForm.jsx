import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Signup() {
  const [customer_name, setcustomer_name] = useState();
  const [customer_number, setcustomer_number] = useState();
  const [	customer_email, setcustomer_email] = useState();
  const [customer_address, setcustomer_address] = useState();
  const [	password, setpassword] = useState();
  const [formErrors, setErrors] = useState({});
  const navigate = useNavigate();
  const validate = () => {
    const error = {};

    if (!customer_name) {
      error.customer_name = "Please Enter Your Name";
    }
   
    if (!customer_number) {
      error.customer_number = "Please Enter Number";
    }
    if (!customer_email) {
      error.customer_email = "Please Enter Email ID";
    }
    
    if (!customer_address) {
      error.customer_address = "Please Enter Number";
    }
    if (!password) {
      error.password = "Please Enter Your Password";
    }
    
    setErrors(error);
    return Object.keys(error).length === 0;
  };
  const urlToFile = async (url, filename) => {
    const response = await fetch(url);
    const blob = await response.blob();
    return new File([blob], filename);
  };
  const btnSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const formData = new FormData();
    formData.append("username", customer_name);
    formData.append("password", password);
    formData.append("user_email", customer_email);
    formData.append("user_number",customer_number);
    formData.append("user_number",customer_address);
    
    try {
      const res = await axios.post(
        "http://localhost:2009/backend/manage_customer",
        formData
      );
      alert(res.data);
      navigate("/login");
    } catch (error) {
      console.error("Error during registration:", error);
      alert("Registration failed. Please try again.");
    }
  };
  return (
    <div>
      <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="styles.css" />
  <title>Signup Page</title>
  <div className="container">
    <h2>Sign Up</h2>
    
    <input
                type="text"
                placeholder="Your name"
                onChange={(e) => setcustomer_name(e.target.value)}
                required=""
              />
              <br />
              <p style={{ color: "red" }}>{formErrors.customer_name}</p>
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setcustomer_email(e.target.value)}
                required=""
              />
              <br />
              <p style={{ color: "red" }}>{formErrors.customer_email}</p>
              <input
                type="number"
                placeholder="Mobile Number"
                onChange={(e) => setcustomer_number(e.target.value)}
                required=""
              />
              <br />
              <p style={{ color: "red" }}>{formErrors.customer_number}</p>
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setpassword(e.target.value)}
                required=""
              />
              <br />
              <p style={{ color: "red" }}>{formErrors.password}</p>
              <input
                type="address"
                placeholder="address"
                onChange={(e) => setcustomer_address(e.target.value)}
                required=""
              />
              <p style={{ color: "red" }}>{formErrors.customer_address}</p>
              <br />
      <button type="submit" onClick={btnSubmit}>Sign Up</button>
              <p>
                Already have an account? <Link to="/Login">Login</Link>
              </p>
  </div>
</>

    </div>
  )
}
