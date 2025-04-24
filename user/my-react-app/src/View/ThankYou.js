import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ThankYou() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F3F2EC",
        fontFamily: "Prata, Georgia, serif",
        flexDirection: "column",
      }}
    >
      <h1 style={{ fontSize: 36, color: "#2f2f2f", marginBottom: 10 }}>
        Thank you for shopping!
      </h1>
      <p style={{ fontSize: 18, color: "#757575" }}>
        Redirecting to homepage...
      </p>
    </div>
  );
}
