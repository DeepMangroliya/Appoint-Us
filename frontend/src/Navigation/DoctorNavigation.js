import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DoctorAppointment from "../Doctor/DoctorAppointment";
import DoctorDashboard from "../Doctor/DoctorDashboard";
import DoctorDeleteAppointment from "../Doctor/DoctorDeleteAppointment";
import DoctorLogin from "../Doctor/DoctorLogin";
import DoctorSignup from "../Doctor/DoctorSignup";
import DoctorViewAppointment from "../Doctor/DoctorViewAppointment";
import DoctorViewDischargePatient from "./../Doctor/DoctorViewDischargePatient";
import GenerateEbill from "./../Doctor/GenerateEbill";
import DoctorPatient from "./../Doctor/DoctorPatient";
import DoctorWaitingPage from "./../Doctor/DoctorWaitingPage";
import DoctorViewPatient from "../Doctor/DoctorViewPatient";
import Navbar from "../Components/Navbar";
import DoctorSidebar from "./../Components/DoctorSidebar";

const DoctorNavigation = () => {
  return (
    <div>
      <Navbar />
      <DoctorSidebar />
      <Routes>
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
        <Route path="/doctor-appointment" element={<DoctorAppointment />} />
        <Route path="/doctor-patient" element={<DoctorPatient />} />
        <Route path="/doctor-waiting" element={<DoctorWaitingPage />} />
        <Route path="/doctor-view-patient" element={<DoctorViewPatient />} />
        <Route
          path="/doctor-view-discharge-patient"
          element={<DoctorViewDischargePatient />}
        />
        <Route
          path="/doctor-view-appointment"
          element={<DoctorViewAppointment />}
        />
        <Route
          path="/doctor-delete-appointment"
          element={<DoctorDeleteAppointment />}
        />
        <Route
          path="/generate-ebill/:aid/:pid/:did"
          element={<GenerateEbill />}
        />
      </Routes>
    </div>
  );
};

export default DoctorNavigation;
