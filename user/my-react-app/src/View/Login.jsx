import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, Router } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [customer_email, setcustomer_email] = useState("");
  const [password,setpassword] = useState("");

  const btnLogin = async () => {
    if (customer_email == "") {
      alert("please enter your email");
      return;
    }
    if (password == "") {
      alert("please enter your password");
      return;
    }
    const res = await axios.post("http://localhost:2009/backend/customer_Login", {
      customer_email,
      password,
    });

    if (res?.data?.msg) {
      alert(res?.data?.msg);
    } else {
      console.log(res?.data)
      localStorage.setItem("userauth", res?.data?.coustomer_id);
      navigate("/")
      setTimeout(() => {
        window.location.reload();
      }, 1000);
      navigate("/")
    }
  };
  return (
    <main id="main" className="main">
    <>
      <>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <link rel="stylesheet" href="styles.css" />{" "}
        {/* Ensure this points to your existing CSS file */}
        <title>Login</title>
        <div className="login-container">
          <div className="login-form">
            <form id="login-form">
              <h2>Login</h2>
              <input
                type="text"
                placeholder="Username"
                value={customer_email}
                onChange={(e) => setcustomer_email(e.target.value)}
                required=""
              />
              <br />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                required=""
              />
              <br />
              <button 
              type="submit"
              onClick={(e)=>{
                e.preventDefault();
                btnLogin()
              }}
              >
                Login
                </button>
                <br />
              
              <p>
                Don't have an account? <Link to="/Signup">Sign up</Link>
              </p>
            </form>
          </div>
        </div>
      </>
    </>
  </main>
  )
}
