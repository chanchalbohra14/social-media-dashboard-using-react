import React from "react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import {
  FaRegImage,
  FaRegCommentDots,
  FaRegUser,
  FaListAlt,
  FaPhotoVideo,
  FaClipboardList,
} from "react-icons/fa";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-wrapper">
      <h1>Welcome to the Dashboard</h1>
      <p>Select a section to explore data</p>
      <div className="dashboard-container">
        <button onClick={() => navigate("/posts")}>
          <FaClipboardList className="icon" /> Posts
        </button>
        <button onClick={() => navigate("/comments")}>
          <FaRegCommentDots className="icon" /> Comments
        </button>
        <button onClick={() => navigate("/albums")}>
          <FaPhotoVideo className="icon" /> Albums
        </button>
        <button onClick={() => navigate("/photos")}>
          <FaRegImage className="icon" /> Photos
        </button>
        <button onClick={() => navigate("/todos")}>
          <FaListAlt className="icon" /> Todos
        </button>
        <button onClick={() => navigate("/users")}>
          <FaRegUser className="icon" /> Users
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
