import React, { useState } from "react";
// import AdminNavbar from "./AdminNavbar";
// import "./AdminDashboard.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Navbar from "./../Components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Validation from "../Components/Validation";

const PatientSignup = (props) => {
  const nav = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [symptom, setSymptom] = useState("");

  const { loading, resError = {} } = props.patient;
  const onSubmit = async (e) => {
    console.log("inside onsubmit");
    e.preventDefault();
    console.table(name, email, password, phone, symptom);
    // axios
    //   .post("/patient/register", {
    // name,
    // email,
    // password,
    // phone,
    // symptom,
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
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
    console.log(resError);
    const myobj = { name, email, password, phone, symptom };
    const result = await props.signup(myobj);
  };
  return (
    <>
      {/* <Navbar /> */}
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
          </div>
          <div className="mb-1">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="pass"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <label className="form-label">Phone</label>
          <input
            type="number"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setPhone(e.target.value)}
          />

          <div className="mb-3">
            <label className="form-label">Symptoms</label>
            <input
              type="text"
              className="form-control"
              id="symptoms"
              onChange={(e) => setSymptom(e.target.value)}
            />
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

export default PatientSignup;
