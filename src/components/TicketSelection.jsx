import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TicketSelection.css";

const TicketSelection = () => {
  const navigate = useNavigate();
  const [ticketType, setTicketType] = useState("");
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="form-container min-h-screen flex items-center justify-center">
      <div className="card">
        <div className="flex selection-head">
            <h2>Ticket Selection</h2>
            <p>Step 1/3</p>
        </div>

        <div className="event-card">
          <h3>Techember Fest '25</h3>
          <p>
            Join us for an unforgettable experience at <span>[Event Name]</span>
            . Secure your spot now.
          </p>
          <p>
            📍 <span>[Event Location]</span> | 📅 March 15, 2025 | 7:00 PM
          </p>
        </div>

        <h3 className="mb-2">Select Ticket Type:</h3>
        <div className="space-y-4 mb-4 card-select">
          <div
            onClick={() => setTicketType("regular")}
            className={`ticket-option ${
              ticketType === "regular" ? "active" : ""
            }`}
          >
            <div className="flex justify-between inner-div">
              <span>REGULAR ACCESS</span>
              <span className="price-tag">Free</span>
            </div>
            <p>20 left!</p>
          </div>

          <div
            onClick={() => setTicketType("vip")}
            className={`ticket-option ${ticketType === "vip" ? "active" : ""}`}
          >
            <div className="flex justify-between inner-div">
              <span>VIP ACCESS</span>
              <span className="price-tag">$50</span>
            </div>
            <p>20 left!</p>
          </div>

          <div
            onClick={() => setTicketType("vvip")}
            className={`ticket-option ${ticketType === "vvip" ? "active" : ""}`}
          >
            <div className="flex justify-between inner-div">
              <span>VVIP ACCESS</span>
              <span className="price-tag">$150</span>
            </div>
            <p>20 left!</p>
          </div>
        </div>

        <h3 className="mb-2">Number of Tickets:</h3>
        <select
          className="select-box"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>

        <div className="flex justify-between">
          <button className="btn-link" onClick={() => navigate("/")}>
            Cancel
          </button>
          <button
            className="btn-primary"
            onClick={() => navigate("/attendee-details")}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketSelection;
