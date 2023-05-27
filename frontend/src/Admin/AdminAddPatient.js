import React, { useState } from "react";
import AdminNavbar from "./AdminNavbar";
import "./AdminDashboard.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Navbar from "./../Components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "../Sidebar";
import { connect } from "react-redux";
import { signup } from "./../Redux/Services/PatientService";
import Validation from "./../Components/Validation";

const AdminAddPatient = (props) => {
  const nav = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [symptom, setSymptom] = useState("");
  const [address, setAddress] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    // console.table(name, email, password, phone, address);
    // axios
    //   .post("/patient/register", {
    // name,
    // email,
    // password,
    // phone,
    // address,
    //   })
    //   .then(function (response) {
    //     console.log(response.data.status);
    //     if (response.data.status === 200) {
    //       toast.success("Patient added succesfully!");
    //       setTimeout(() => {
    //         nav("/admin-dashboard");
    //       }, 2500);
    //     } else {
    //       toast.error("Interal Server Error");
    //     }
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    const myobj = { name, email, password, phone, symptom, address };
    let result = await props.signup(myobj);
    console.log(result);
    if (result) {
      nav("/admin-dashboard");
    }
  };
  const { loading, resError = {} } = props.patient;

  return (
    <>
      {/* <Navbar /> */}
      <Sidebar />
      <div className="form-div">
        <form>
          <h1>Create Patient Account</h1>
          <div className="mb-3">
            <label className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              aria-describedby="emailHelp"
              onChange={(e) => setName(e.target.value)}
            />
            <Validation error={resError.name} />

            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Validation error={resError.email} />
          </div>
          <div className="mb-1">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="pass"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Validation error={resError.password} />
          </div>
          <label className="form-label">Phone</label>
          <input
            type="number"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setPhone(e.target.value)}
          />
          <Validation error={resError.phone} />

          <div className="mb-3">
            <label className="form-label">Symptoms</label>
            <input
              type="text"
              className="form-control"
              id="symptoms"
              onChange={(e) => setSymptom(e.target.value)}
            />
            <Validation error={resError.symptom} />
            <label className="form-label">Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              onChange={(e) => setAddress(e.target.value)}
            />
            <Validation error={resError.address} />
          </div>
          <button type="submit" className="btn btn-primary" onClick={onSubmit}>
            Admit
          </button>
          <ToastContainer autoClose={2000} />
        </form>
      </div>
    </>
  );
};

// export default AdminAddPatient;
const mapStateToProps = (state) => ({
  patient: state.patient,
});

export default connect(mapStateToProps, {
  // clearAuthResponseMsg,
  signup,
})(AdminAddPatient);
