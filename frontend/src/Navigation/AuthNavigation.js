import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import AdminLogin from "../Admin/AdminLogin";
import AdminSignup from "../Admin/AdminSignup";
import Navbar from "../Components/Navbar";
import DoctorLogin from "../Doctor/DoctorLogin";
import DoctorSignup from "../Doctor/DoctorSignup";
import Home from "../Home";
import PatientLogin from "../Patient/PatientLogin";
import PatientSignup from "./../Patient/PatientSignup";

const AuthNavigation = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patientlogin" element={<PatientLogin />} />
        <Route path="/patientsignup" element={<PatientSignup />} />
        <Route path="/doctorlogin" element={<DoctorLogin />} />
        <Route path="/doctorsignup" element={<DoctorSignup />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/adminsignup" element={<AdminSignup />} />
      </Routes>
    </>
  );
};

export default AuthNavigation;
