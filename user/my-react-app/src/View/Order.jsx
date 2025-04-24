import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Order() {
  const [orderItems, setOrderItems] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const navigate = useNavigate();

  useEffect(() => {
    const orderNumber = localStorage.getItem("recent_order_number");
    if (orderNumber) {
      axios
        .get(`http://localhost:2009/backend/manage_order/${orderNumber}`)
        .then((res) => {
          setOrderItems(res.data);
          localStorage.removeItem("recent_order_number");
        })
        .catch((err) => console.error("Failed to fetch order:", err));
    }
  }, []);

  const customer = orderItems[0];

  const handlePlaceOrder = async () => {
    const authID = localStorage.getItem("userauth");

    if (paymentMethod === "cod") {
      try {
        // Fetch user's cart items first
        const cartRes = await axios.get(`http://localhost:2009/backend/manage_managecart/${authID}`);
        const cartItems = cartRes.data || [];

        // Loop through each item and delete it from cart
        for (const item of cartItems) {
          await axios.delete(`http://localhost:2009/backend/manage_managecart/${item.cart_id}`);
        }

        alert("Your order has been placed successfully!");
        navigate("/thankyou");
      } catch (error) {
        console.error("Failed to clear cart:", error);
        alert("Order placed, but failed to clear cart.");
      }
    }
  };

  return (
    <div>
      <title>Order Now</title>
      <div
        style={{
          maxWidth: 800,
          margin: "auto",
          background: "white",
          padding: 20,
          borderRadius: 10,
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ borderBottom: "2px solid #ddd", paddingBottom: 10 }}>
          Product Details
        </h2>

        {orderItems.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <img
              src={`http://localhost:2009/backend/Images/${item.book_img}`}
              alt={item.book_name}
              style={{
                width: 150,
                height: 150,
                objectFit: "cover",
                marginRight: 20,
                borderRadius: 10,
              }}
            />
            <div>
              <h3 style={{ margin: 0 }}>{item.book_name}</h3>
              <p style={{ margin: "5px 0" }}>
                Price: ₹{item.total_price / item.quantity}
              </p>
              <p style={{ margin: "5px 0" }}>Quantity: {item.quantity}</p>
              <p style={{ margin: "5px 0", fontWeight: "bold" }}>
                Total Price: ₹{item.total_price}
              </p>
            </div>
          </div>
        ))}

        <h2 style={{ borderBottom: "2px solid #ddd", paddingBottom: 10 }}>
          Customer Details
        </h2>

        {customer && (
          <div style={{ marginBottom: 20 }}>
            <p>
              <strong>Name:</strong> {customer.customer_name}
            </p>
            <p>
              <strong>Phone Number:</strong> {customer.customer_number}
            </p>
            <p>
              <strong>Email:</strong> {customer.customer_email}
            </p>
            <p>
              <strong>Address:</strong> {customer.customer_address}
            </p>
          </div>
        )}

        <h2 style={{ borderBottom: "2px solid #ddd", paddingBottom: 10 }}>
          Payment Method
        </h2>

        <div style={{ marginBottom: 20 }}>
          <label>
            <input
              type="radio"
              value="cod"
              checked={paymentMethod === "cod"}
              onChange={(e) => setPaymentMethod(e.target.value)}
              style={{ marginRight: 10 }}
            />
            Cash on Delivery
          </label>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Link to="/">
            <button
              style={{
                backgroundColor: "#C5A992",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: 5,
                cursor: "pointer",
              }}
            >
              Back to Home
            </button>
          </Link>

          <button
            onClick={handlePlaceOrder}
            style={{
              backgroundColor: "#C5A992",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: 5,
              cursor: "pointer",
            }}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
