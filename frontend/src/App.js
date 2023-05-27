import { Provider } from "react-redux";
import store from "./Redux/Store/Store";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import AdminLogin from "./Admin/AdminLogin";
import DoctorLogin from "./Doctor/DoctorLogin";
import DoctorSignup from "./Doctor/DoctorSignup";
import AdminSignup from "./Admin/AdminSignup";
import PatientLogin from "./Patient/PatientLogin";
import PatientSignup from "./Patient/PatientSignup";
import AdminDashboard from "./Admin/AdminDashboard";
import DoctorDashboard from "./Doctor/DoctorDashboard";
import AdminDoctor from "./Admin/AdminDoctor";
import AdminViewPatient from "./Admin/AdminViewPatient";
import AdminViewDoctor from "./Admin/AdminViewDoctor";
import AdminAddDoctor from "./Admin/AdminAddDoctor";
import AdminApproveDoctor from "./Admin/AdminApproveDoctor";
import AdminPatient from "./Admin/AdminPatient";
import AdminAddPatient from "./Admin/AdminAddPatient";
import AdminDischargePatient from "./Admin/AdminDischargePatient";
import AdminAppointment from "./Admin/AdminAppointment";
import AdminViewAppointment from "./Admin/AdminViewAppointment";
import AdminAddAppointment from "./Admin/AdminAddAppointment";
import DoctorAppointment from "./Doctor/DoctorAppointment";
import DoctorViewAppointment from "./Doctor/DoctorViewAppointment";
import DoctorDeleteAppointment from "./Doctor/DoctorDeleteAppointment";
import DoctorPatient from "./Doctor/DoctorPatient";
import DoctorViewDischargePatient from "./Doctor/DoctorViewDischargePatient";
import PatientDashboard from "./Patient/PatientDashboard";
import PatientBookAppointment from "./Patient/PatientBookAppointment";
import PatientViewAppointment from "./Patient/PatientViewAppointment";
import AdminApproveAppointment from "./Admin/AdminApproveAppointment";
import AdminUpdateDoctor from "./Admin/AdminUpdateDoctor";
import AdminUpdatePatient from "./Admin/AdminUpdatePatient";
import GenerateEbill from "./Doctor/GenerateEbill";
import { useState } from "react";
import DataState from "./Context/DataState";
import PatientEBill from "./Patient/PatientEBill";
import DoctorWaitingPage from "./Doctor/DoctorWaitingPage";
import AdminEBill from "./Admin/AdminEBill";
import DoctorViewPatient from "./Doctor/DoctorViewPatient";
import PatientCheckBills from "./Patient/PatientCheckBills";
import Sidebar from "./Sidebar";
// import ProtectedRoute from "./Admin/ProtectedRoute";
import IndexNavigation from "./Navigation/IndexNavigation";
function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <IndexNavigation />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
