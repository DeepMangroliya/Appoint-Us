import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import PatientLogin from "../Patient/PatientLogin";
import PatientSignup from "./../Patient/PatientSignup";
import PatientDashboard from "./../Patient/PatientDashboard";
import PatientViewAppointment from "./../Patient/PatientViewAppointment";
import PatientCheckBills from "./../Patient/PatientCheckBills";
import PatientBookAppointment from "../Patient/PatientBookAppointment";
import PatientEBill from "./../Patient/PatientEBill";
import Navbar from "../Components/Navbar";
import Sidebar from "./../Sidebar";
import PatientSidebar from "./../Components/PatientSidebar";

const PatientNavigation = () => {
  return (
    <>
      <Navbar />
      <PatientSidebar />
      <Routes>
        <Route path="/patientlogin" element={<PatientLogin />} />
        <Route path="/patientsignup" element={<PatientSignup />} />
        <Route path="/patient-dashboard" element={<PatientDashboard />} />
        <Route
          path="/patient-view-appointment"
          element={<PatientViewAppointment />}
        />
        <Route path="/patient-check-ebills" element={<PatientCheckBills />} />
        <Route
          path="/patient-book-appointment"
          element={<PatientBookAppointment />}
        />
        {/* Doctor Pages */}
        <Route path="/patient-e-bill/:id" element={<PatientEBill />} />
      </Routes>
    </>
  );
};

export default PatientNavigation;
