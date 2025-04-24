import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
export default function Account() {
  const [customer,setcustomer] = useState([])
  const navigate = useNavigate();

  useEffect(()=>{
    fatchcustomer()
  },[])

  const fatchcustomer = async() =>{
    const res=await axios.get("http://localhost:2009/backend/manage_customer/")
    setcustomer(res.data)
  }
  const singOut = async () => {
    navigate("/Login");
    localStorage.clear();
    window.location.reload();
  };
  return (
    
<div>
  <>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="styles.css" />
    <title>User Information</title>

    <div
      className="container"
      style={{
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        maxWidth: '600px',
        margin: '0 auto',
        backgroundColor: '#f5f5f5',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h2 style={{ marginBottom: '20px', color: '#333' }}>Account Information</h2>

      {customer.map((obj) => (
        <div
          id="user-info"
          style={{
            border: '1px solid #ddd',
            padding: '15px',
            borderRadius: '8px',
            marginBottom: '15px',
            backgroundColor: '#fff',
          }}
        >
          <p id="username" style={{ margin: '8px 0' }}>
            Username: <span style={{ fontWeight: 'bold' }}>{obj.customer_name}</span>
          </p>
          <p id="email" style={{ margin: '8px 0' }}>
            Email: <span style={{ fontWeight: 'bold' }}>{obj.customer_email}</span>
          </p>
          <p id="phone" style={{ margin: '8px 0' }}>
            Phone Number: <span style={{ fontWeight: 'bold' }}>{obj.customer_number}</span>
          </p>
        </div>
      ))}

      <div
        id="auth-buttons"
        style={{
          marginTop: '20px',
        }}
      >
        <button
          className="btn mr-3"
          style={{
            padding: '10px 20px',
            backgroundColor: '#C5A992',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          <Link
            className="dropdown-item d-flex align-items-center"
            to="/login"
            onClick={(e) => {
              e.preventDefault();
              let confirm = window.confirm(
                'Are you sure you want to sign out?'
              );
              if (confirm) {
                singOut();
              }
            }}
            style={{
              textDecoration: 'none',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              
            }}
          >
            Log Out
          </Link>
        </button>

        {/* <button className='btn' >
      <Link to="/Editaccount" className="button">
        Update Information
      </Link>
      </button>

      <button className='btn mr-3'>
      <Link to="/ChangePassword" className="button">
      Change Password
      </Link>
      </button> */}
      </div>
    </div>
  </>
</div>

  )
}
