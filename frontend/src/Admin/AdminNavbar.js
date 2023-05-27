import React, { useEffect, useState } from "react";
import { RiAdminLine } from "react-icons/ri";
import { FaHospitalUser, FaHospitalAlt } from "react-icons/fa";
import { MdOutlineSick } from "react-icons/md";
import "../Css/navbar.css";
import { Link, useNavigate } from "react-router-dom";
const AdminNavbar = () => {
  const nav = useNavigate();
  const [data, setData] = useState();
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("data")));
  }, []);
  console.log(data);
  const logoutHandler = () => {
    localStorage.clear();
    nav("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Hospital Management
      </Link>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          {localStorage.getItem("data") && (
            <>
              <Link
                className="nav-item nav-link"
                to="/admin-dashboard"
                style={{ color: "orange" }}
              >
                <RiAdminLine className="admin-icon" />
                Welcome, {data?.name}
              </Link>
              <h6 className="nav-item nav-link mt-1" onClick={logoutHandler}>
                Logout
              </h6>
            </>
          )}
          {/* <Link className="nav-item nav-link" to="/admin-dashboard">
            Dashboard <RiAdminLine className="admin-icon" />
          </Link>
          <Link className="nav-item nav-link" to="/admin-doctor">
            Doctor <MdOutlineSick />
          </Link>
          <Link className="nav-item nav-link" to="/admin-patient">
            Patient <MdOutlineSick />
          </Link>
          <Link className="nav-item nav-link" to="/admin-appointment">
            Appointments <FaHospitalUser />
          </Link> */}
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
