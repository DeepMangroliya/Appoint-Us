import React from "react";
import "../Sidebar.css";
import { Link } from "react-router-dom";
const PatientSidebar = () => {
  return (
    <div className="sidebar">
      <div className="imageWrapper mb-3">
        <img
          src="https://picsum.photos/200"
          id="profile-image"
          className="img-fluid"
          alt="profile"
        />
      </div>
      <Link to="/patient-dashboard">
        <i className="fa fa-fw fa-home"></i> Dashboard
      </Link>
      <Link to="/admin-appointment">
        <i className="fa fa-fw fa-envelope"></i> Appointment
      </Link>
    </div>
  );
};

export default PatientSidebar;
