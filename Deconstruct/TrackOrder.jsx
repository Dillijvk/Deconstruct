import "./css/index.css";
import logo from "../Img/logo.webp";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function TrackOrder() {
  const [orderId, setOrderId] = useState("");
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");

  const handleTrack = () => {
    // only numbers check
    if (!/^[0-9]+$/.test(orderId)) {
      setError("Order ID must contain only numbers");
      return;
    }

    if (!/^[0-9]{10}$/.test(mobile)) {
      setError("Mobile number must be 10 digits and only numbers");
      return;
    }

    setError("");
    alert("Tracking order...");
  };

  return (


    <>

    <div className="logoo">
         <Link to="/">
        <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="track-container">
        <div className="track-box">
          <h2>Track Your Order</h2>
          <p>Enter your order details to track your order</p>

          <div className="form">
            <label>Order ID</label>
            <input
              type="text"
              placeholder="Enter Order ID"
              value={orderId}
              onChange={(e) =>
                /^[0-9]*$/.test(e.target.value) && setOrderId(e.target.value)
              }
            />

            <label>Mobile</label>
            <input
              type="text"
              placeholder="Enter Mobile Number"
              value={mobile}
              onChange={(e) =>
                /^[0-9]*$/.test(e.target.value) && setMobile(e.target.value)
              }
              maxLength={10}
            />

            {error && <p style={{ color: "red" }}>{error}</p>}

            <button onClick={handleTrack}>Track Your Order</button>
          </div>
        </div>
      </div>
    </>
  );
}