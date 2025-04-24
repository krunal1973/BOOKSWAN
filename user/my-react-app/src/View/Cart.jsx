import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
import { generateRandomAlphaNumericString } from "../constants/constants";

export default function CartItem() {
  const [cart, setCart] = useState([]);
  const [customerr, setCustomerr] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetchCartItems();
    fetchCustomerDetails();
  }, []);

  const fetchCustomerDetails = async () => {
    const authID = localStorage.getItem("userauth");
    if (!authID) return;
    const res = await axios.get(`http://localhost:2009/backend/manage_customer/${authID}`);
    setCustomerr(res.data[0]);
  };

  const fetchCartItems = async () => {
    const authID = localStorage.getItem("userauth");
    if (!authID) return;

    try {
      const res = await axios.get(`http://localhost:2009/backend/manage_managecart/${authID}`);
      setCart(res.data || []);
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  const handleQuantityChange = async (e, index) => {
    const val = Math.max(1, Math.min(30, parseInt(e.target.value) || 1));
    const updatedCart = [...cart];
    const item = updatedCart[index];

    item.quantity = val;
    item.amount = item.amount_per_unit || item.amount;
    const newAmount = item.amount * val;

    try {
      await axios.put(`http://localhost:2009/backend/manage_managecart/${item.cart_id}`, {
        quantity: val,
        amount: newAmount,
      });
      fetchCartItems();
    } catch (error) {
      console.error("Failed to update cart item:", error);
    }
  };

  const handleDeleteItem = async (cartId) => {
    try {
      await axios.delete(`http://localhost:2009/backend/manage_managecart/${cartId}`);
      fetchCartItems();
    } catch (error) {
      console.error("Error deleting cart item:", error);
    }
  };

  const handlePlaceOrder = async () => {
    const authID = localStorage.getItem("userauth");
    const orderNumber = generateRandomAlphaNumericString(8);

    for (let item of cart) {
      try {
        const totalPrice = item.amount * item.quantity;
        await axios.post("http://localhost:2009/backend/manage_order", {
          order_number: orderNumber,
          book_img: item.boook_image,
          book_name: item.book_name,
          customer_id: authID,
          customer_name: customerr.customer_name,
          customer_email: customerr.customer_email,
          customer_number: customerr.customer_number,
          customer_address: customerr.customer_address,
          quantity: item.quantity,
          total_price: totalPrice,
        });
      } catch (error) {
        console.error("Error placing order:", error);
        alert("Failed to place order for item: " + item.book_name);
      }
    }

    localStorage.setItem("recent_order_number", orderNumber);
    navigate("/Order/");
    alert("Order placed successfully!");
  };

  const totalCartPrice = cart.reduce((sum, item) => sum + item.amount * item.quantity, 0);

  return (
    <div
      style={{
        maxWidth: 800,
        margin: "40px auto",
        padding: 20,
        backgroundColor: "white",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        borderRadius: 8,
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ marginBottom: 20 }}>Your Cart</h2>

      {cart.length > 0 ? (
        cart.map((item, index) => {
          const itemTotal = item.amount * item.quantity;
          return (
            <div
              key={index}
              style={{
                display: "flex",
                gap: 20,
                borderBottom: "1px solid #ddd",
                paddingBottom: 20,
                marginBottom: 20,
                alignItems: "center",
              }}
            >
              <img
                src={`http://localhost:2009/backend/Images/${item.boook_image}`}
                alt={item.book_name}
                style={{
                  width: 100,
                  height: 100,
                  objectFit: "cover",
                  borderRadius: 8,
                  border: "1px solid #ccc",
                }}
              />
              <div style={{ flex: 1 }}>
                <h3 style={{ margin: "0 0 6px", fontSize: 18 }}>{item.book_name}</h3>
                <p style={{ margin: "4px 0", color: "#757575" }}>Price: ₹{item.amount}</p>
                <div style={{ marginTop: 10 }}>
                  <label htmlFor={`quantity-${index}`} style={{ color: "#757575", marginRight: 10 }}>
                    Quantity:
                  </label>
                  <input
                    type="number"
                    id={`quantity-${index}`}
                    value={item.quantity}
                    min={1}
                    max={30}
                    onChange={(e) => handleQuantityChange(e, index)}
                    style={{
                      width: 60,
                      padding: "6px 8px",
                      border: "1px solid #ccc",
                      borderRadius: 4,
                      fontSize: 16,
                    }}
                  />
                </div>
                <p style={{ marginTop: 10, fontWeight: "bold" }}>Total: ₹{itemTotal}</p>
              </div>
              <button
                onClick={() => handleDeleteItem(item.cart_id)}
                style={{
                  backgroundColor: "#C5A992",
                  color: "#2f2f2f",
                  border: "none",
                  padding: "8px 14px",
                  borderRadius: 6,
                  fontSize: 14,
                  cursor: "pointer",
                  alignSelf: "start",
                  marginTop: 4,
                }}
              >
                Delete
              </button>
            </div>
          );
        })
      ) : (
        <p style={{ color: "#757575", marginTop: 30 }}>Your cart is empty.</p>
      )}

      {cart.length > 0 && (
        <div style={{ textAlign: "right", marginBottom: 30 }}>
          <h3 style={{ color: "#2f2f2f" }}>Total Price: ₹{totalCartPrice}</h3>
        </div>
      )}

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <button
            style={{
              padding: "12px 24px",
              backgroundColor: "#C5A992",
              color: "white",
              border: "none",
              borderRadius: 6,
              fontSize: 16,
              cursor: "pointer",
            }}
          >
            ← Back to Home
          </button>
        </Link>
        {cart.length > 0 && (
          <button
            onClick={handlePlaceOrder}
            style={{
              padding: "12px 24px",
              backgroundColor: "#C5A992",
              color: "white",
              border: "none",
              borderRadius: 6,
              fontSize: 16,
              cursor: "pointer",
            }}
          >
            Place Order →
          </button>
        )}
      </div>
    </div>
  );
}
