import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AttendeeInfo.css";

const AttendeeInfo = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [about, setAbout] = useState("");
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  // Cloudinary Details from .env
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;
  

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select an image to upload");

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        formData
      );
      setImageUrl(response.data.secure_url);
      alert("Image uploaded successfully!");
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Failed to upload image. Please try again.");
    }
    setUploading(false);
  };

  const handleNext = () => {
    navigate("/ticket-ready", {
      state: {
        userName: attendeeName,
        userImage: uploadedImageUrl, // URL from Cloudinary
        eventName: "Techember Fest '25",
        location: "04 Rumens road, Ikoyi, Lagos",
        date: "March 15, 2025",
        time: "7:00 PM",
        ticketType: "REG",
      },
    });
  };
  

  return (
    <div className="form-container">
      <div className="card">
        <h2>Attendee Details</h2>
        <div className="progress-bar">
          <div className="progress"></div>
        </div>

        {/* Upload Section */}
        <div
          className="upload-box"
          onClick={() => document.getElementById("file-upload").click()}
        >
          <label htmlFor="file-upload" className="custom-file-upload">
            {file ? file.name : "Drag & drop or click to upload"}
          </label>
          <input
            id="file-upload"
            type="file"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </div>

        {file && (
          <button
            className="upload-button"
            onClick={handleUpload}
            disabled={uploading}
          >
            {uploading ? "Uploading..." : "Upload Image"}
          </button>
        )}

        {imageUrl && (
          <div className="uploaded-image">
            <img src={imageUrl} alt="Uploaded" />
          </div>
        )}

        {/* Form Fields */}
        <div className="input-group">
          <label>Enter your name</label>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Enter your email *</label>
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>About the project</label>
          <textarea
            placeholder="Tell us about your project..."
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="button-group">
          <button
            className="button back"
            onClick={() => navigate("/ticket-selection")}
          >
            Back
          </button>
          <button
            className="button next"
            onClick={() => navigate("/ticket-ready")}
          >
            Get My Free Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default AttendeeInfo;
