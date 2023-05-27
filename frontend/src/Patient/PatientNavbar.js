import React from "react";
import { RiAdminLine } from "react-icons/ri";
import { FaHospitalUser, FaHospitalAlt } from "react-icons/fa";
import { MdOutlineSick } from "react-icons/md";
import "../Css/navbar.css";
import { Link } from "react-router-dom";
const DoctorNavbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          Hospital Management
        </Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link" to="/admin-dashboard">
              Dashboard <RiAdminLine className="admin-icon" />
            </Link>
            <Link className="nav-item nav-link" to="/doctor-patient">
              Appointments <MdOutlineSick />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default DoctorNavbar;
