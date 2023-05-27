import React, { useEffect } from "react";
import doctorImage from "./images/doctor-image.jpg";
import adminImage from "./images/admin-image.jpg";
import patientImage from "./images/patient-image.png";
import img from "./images/hostpital-system-main-img.jpg";
import Navbar from "./Components/Navbar";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const nav = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("type") === "admin") {
      nav(`/admin-dashboard`);
    }
    if (localStorage.getItem("type") === "doctor") {
      nav(`/doctor-dashboard`);
    }
    if (localStorage.getItem("type") === "patient") {
      nav(`/patient-dashboard`);
    }
  }, []);
  return (
    <>
      <div className="image">
        <img src={img} className="main-img" alt="hostpital" />
      </div>
      <section>
        <div className="section-text">
          <p className="tagline-text">We have Power to heal</p>
        </div>
        <hr />
        <div className="section-images">
          <br></br>
          <div className="container">
            <div className="row">
              <div className="col-sm">
                <Link to="/adminlogin">
                  <img src={adminImage} className="main-img" alt="admin" />
                </Link>
              </div>
              <div className="col-sm">
                <img src={doctorImage} className="main-img" alt="admin" />
              </div>
              <div className="col-sm">
                <img src={patientImage} className="patient-img" alt="admin" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
