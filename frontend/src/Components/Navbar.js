import React, { useEffect, useState } from "react";
import { RiAdminLine } from "react-icons/ri";
import { FaHospitalUser, FaHospitalAlt } from "react-icons/fa";
import { MdOutlineSick } from "react-icons/md";
import logo from "../images/logo.png";

import "../Css/navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { setCommonType } from "../Redux/Actions/CommonAction";
import { useDispatch } from "react-redux";
const Navbar = () => {
  const [data, setData] = useState();
  const nav = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("data")));
  }, []);

  const logoutHandler = () => {
    localStorage.clear();
    dispatch(setCommonType(null));
    nav("/");
  };

  console.log("data", data);

  if (data) {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          Hospital Management
        </Link>
        <div className="wrapper">
          <h6 className="navbar-brand text-warning">
            {/* Welcome, {data?.name.charAt(0).toUpperCase() + data.name.slice(1)} */}
          </h6>
          <h6 className="logout" onClick={logoutHandler}>
            Logout
          </h6>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          Hospital Management
        </Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link" to="/adminlogin">
              Admin <RiAdminLine className="admin-icon" />
            </Link>
            <Link className="nav-item nav-link" to="/doctorlogin">
              Doctor <FaHospitalUser />
            </Link>
            <Link className="nav-item nav-link" to="/patientlogin">
              Patient
              <MdOutlineSick />
            </Link>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
