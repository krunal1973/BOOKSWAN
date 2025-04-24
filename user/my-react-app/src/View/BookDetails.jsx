import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function BookDetails() {
  const [book, setBook] = useState([]);
  const [book_name, setbook_name] = useState([]);
  const [book_category_id, setbook_category_id] = useState();
  const [book_publisher, setbook_publisher] = useState();
  const [book_author, setbook_author] = useState();
  const [book_description, setbook_description] = useState();
  const [publish_date, setpublish_date] = useState();
  const [boook_image, setboook_image] = useState();
  const [amount, setamount] = useState();
  const [book_id, setbook_id] = useState();

  const { id } = useParams();
  const navigate = useNavigate();
  const [auth, setAuth] = useState("");

  useEffect(() => {
    setAuth(localStorage.getItem("userauth"));
    if (id) {
      fatchDetails();
    }
  }, [id]);

  const fatchDetails = async () => {
    const res = await axios.get("http://localhost:2009/backend/manage_book/" + id);
    const bookData = Array.isArray(res.data) ? res.data[0] : res.data;
    setbook_id(bookData.book_id);
    setbook_name(bookData.book_name);
    setbook_category_id(bookData.book_category_id);
    setbook_publisher(bookData.book_publisher);
    setbook_author(bookData.book_author);
    setbook_description(bookData.book_description);
    setpublish_date(bookData.publish_date);
    setboook_image(bookData.boook_image);
    setamount(bookData.amount);
  };

  const btnSubmit = async () => {
    const authID = localStorage.getItem("userauth");
    if (authID) {
      try {
        const res = await axios.post("http://localhost:2009/backend/manage_managecart/cart", {
          customer_id: authID,
          book_id,
          book_name,
          quantity: 1,
          amount,
        });
        alert(res.data);
        navigate("/Cart");
      } catch (error) {
        console.error("Error adding to cart:", error);
        alert("Failed to add to cart. Please try again.");
      }
    } else {
      alert("Please login/Register to continue !!!");
      navigate("/customer_Login");
    }
  };

  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Book Detail</title>
      <div
        style={{
          maxWidth: 900,
          margin: "40px auto",
          padding: 24,
          backgroundColor: "white",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          borderRadius: 16,
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 24,
        }}
      >
        {/* Book Image */}
        <div style={{ textAlign: "center" }}>
          <img
            src={`http://localhost:2009/backend/Images/${boook_image}`}
            alt="Book Cover"
            style={{
              width: "100%",
              maxWidth: 300,
              borderRadius: 12,
              objectFit: "cover",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          />
        </div>

        {/* Book Details */}
        <div>
          <h1
            style={{
              fontSize: 28,
              fontFamily: '"Prata", Georgia, serif',
              fontWeight: "bold",
              color: "#2f2f2f",
            }}
          >
            {book_name}
          </h1>
          <div style={{ marginTop: 16, color: "#757575" }}>
            <p>
              <span style={{ fontWeight: 600, color: "#2f2f2f" }}>Author:</span> {book_author}
            </p>
            <p>
              <span style={{ fontWeight: 600, color: "#2f2f2f" }}>Publisher:</span> {book_publisher}
            </p>
            <p>
              <span style={{ fontWeight: 600, color: "#2f2f2f" }}>Category:</span> {book_category_id}
            </p>
            <p>
              <span style={{ fontWeight: 600, color: "#2f2f2f" }}>Publish Date:</span> {publish_date}
            </p>
          </div>
          <div style={{ marginTop: 16 }}>
            <h2
              style={{
                fontSize: 20,
                fontWeight: 600,
                marginBottom: 8,
                color: "#2f2f2f",
              }}
            >
              Description
            </h2>
            <p style={{ lineHeight: "1.6", color: "#757575" }}>{book_description}</p>
            <p style={{ fontWeight: "600", marginTop: 12 }}>Amount: ₹{amount}</p>
          </div>

          {/* Buttons */}
          <div style={{ marginTop: 24, display: "flex", gap: 12, flexWrap: "wrap" }}>
            {auth ? (
              <button
                onClick={btnSubmit}
                style={{
                  backgroundColor: "#C5A992",
                  color: "white",
                  padding: "10px 24px",
                  border: "none",
                  borderRadius: 12,
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Add To Cart
              </button>
            ) : (
              <Link to="/login" style={{ textDecoration: "none" }}>
                <button
                  style={{
                    backgroundColor: "#C5A992",
                    color: "white",
                    padding: "10px 24px",
                    border: "none",
                    borderRadius: 12,
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  Add To Cart
                </button>
              </Link>
            )}

            <Link to="/" style={{ textDecoration: "none" }}>
              <button
                style={{
                  backgroundColor: "#C5A992",
                  color: "white",
                  padding: "10px 24px",
                  border: "none",
                  borderRadius: 12,
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
