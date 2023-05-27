import React, { useEffect } from "react";
import { RiAdminLine } from "react-icons/ri";
import { FaHospitalUser, FaHospitalAlt } from "react-icons/fa";
import { MdOutlineSick } from "react-icons/md";
import "../Css/navbar.css";
import { Link } from "react-router-dom";
const DoctorNavbar = () => {
  // useEffect(() => {}, []);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Hospital Management
      </Link>
      {localStorage.getItem("data") && (
        <Link className="navbar-brand" style={{ color: "orange" }} to="/">
          Welcome, {JSON.parse(localStorage.getItem("data")).name}
        </Link>
      )}
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-item nav-link" to="/doctor-dashboard">
            Dashboard <RiAdminLine className="admin-icon" />
          </Link>
          <Link className="nav-item nav-link" to="/doctor-patient">
            Patients <MdOutlineSick />
          </Link>
          {/* <Link className="nav-item nav-link" to="/doctor-appointment">
            Appointments <FaHospitalUser />
          </Link> */}
        </div>
      </div>
    </nav>
  );
};

export default DoctorNavbar;
