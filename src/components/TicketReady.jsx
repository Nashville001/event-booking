import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
const QRCode = React.lazy(() => import("react-qr-code"));
import "./TicketReady.css";

const TicketReady = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    userName,
    userImage,
    eventName,
    location: eventLocation,
    date,
    time,
    ticketType,
  } = location.state || {};

  const handleDownload = () => {
    const qrCodeURL = document.querySelector("canvas").toDataURL("image/png");
    const link = document.createElement("a");
    link.href = qrCodeURL;
    link.download = "ticket-qr-code.png";
    link.click();
  };

  return (
    <div className="ticket-ready-container form-container">
      <div className="card">
        <h2>Ready</h2>
        <div className="progress-bar">
          <div className="progress complete"></div>
        </div>

        <h3>Your Ticket is Booked!</h3>
        <p>You can download or check your email for a copy</p>

        <div className="ticket">
          <Suspense fallback={<div>Loading...</div>}>
            <QRCode value="Your QR Code Value" />
          </Suspense>
          <div className="ticket-details">
            <h4>{eventName}</h4>
            <p>
              📍 {eventLocation}
              <br />
              📅 {date} | 🕒 {time}
            </p>
            <div className="ticket-type">{ticketType}</div>
          </div>
          <div className="ticket-stub">
            {userImage && (
              <img src={userImage} alt={userName} className="attendee-image" />
            )}
            <span>{eventName}</span>
            <span>User Name: {userName}</span>
          </div>
        </div>

        <div className="button-group">
          <button className="button back" onClick={() => navigate("/")}>
            Book Another Ticket
          </button>
          <button className="button next" onClick={handleDownload}>
            Download Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketReady;
