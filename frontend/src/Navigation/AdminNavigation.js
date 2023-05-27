import React from "react";
import { Navigate, Route, Routes, Link } from "react-router-dom";
import AdminLogin from "../Admin/AdminLogin";
import AdminSignup from "../Admin/AdminSignup";
import AdminUpdateDoctor from "../Admin/AdminUpdateDoctor";
import AdminViewDoctor from "../Admin/AdminViewDoctor";
import Home from "../Home";
import AdminDashboard from "./../Admin/AdminDashboard";
import AdminDoctor from "./../Admin/AdminDoctor";
import AdminUpdatePatient from "./../Admin/AdminUpdatePatient";
import AdminAddDoctor from "./../Admin/AdminAddDoctor";
import AdminApproveDoctor from "./../Admin/AdminApproveDoctor";
import AdminPatient from "./../Admin/AdminPatient";
import AdminViewPatient from "./../Admin/AdminViewPatient";
import AdminAddPatient from "../Admin/AdminAddPatient";
import AdminDischargePatient from "./../Admin/AdminDischargePatient";
import AdminAppointment from "./../Admin/AdminAppointment";
import AdminEBill from "./../Admin/AdminEBill";
import AdminApproveAppointment from "../Admin/AdminApproveAppointment";
import AdminViewAppointment from "./../Admin/AdminViewAppointment";
import AdminAddAppointment from "./../Admin/AdminAddAppointment";
import Navbar from "../Components/Navbar";

const AdminNavigation = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/adminsignup" element={<AdminSignup />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin-doctor" element={<AdminDoctor />} />
        <Route path="/admin-view-doctor" element={<AdminViewDoctor />} />
        <Route
          path="/admin-update-doctor/:id"
          element={<AdminUpdateDoctor />}
        />
        <Route
          path="/admin-update-patient/:id"
          element={<AdminUpdatePatient />}
        />
        <Route path="/admin-add-doctor" element={<AdminAddDoctor />} />
        <Route path="/admin-approve-doctor" element={<AdminApproveDoctor />} />
        <Route path="/admin-patient" element={<AdminPatient />} />
        <Route path="/admin-view-patient" element={<AdminViewPatient />} />
        <Route path="/admin-add-patient" element={<AdminAddPatient />} />
        <Route
          path="/admin-discharge-patient"
          element={<AdminDischargePatient />}
        />
        <Route path="/admin-appointment" element={<AdminAppointment />} />
        <Route path="/admin-bill/:id/:did/:pid" element={<AdminEBill />} />
        <Route
          path="/admin-approve-appointment"
          element={<AdminApproveAppointment />}
        />
        <Route
          path="/admin-view-appointment"
          element={<AdminViewAppointment />}
        />
        <Route
          path="/admin-add-appointment"
          element={<AdminAddAppointment />}
        />
      </Routes>
    </div>
  );
};

export default AdminNavigation;
