import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminNavbar from "./AdminNavbar";
import Sidebar from "./../Sidebar";

const AdminAddAppointment = () => {
  const nav = useNavigate();
  const [doctors, setDoctors] = useState();
  const [patients, setPatients] = useState();
  const [doctorId, setDoctorId] = useState();
  const [description, setDescription] = useState();
  const [userId, setUserId] = useState();
  useEffect(() => {
    axios
      .get("/doctor/doctors", {})
      .then(function (response) {
        setDoctors(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    axios
      .get("/patient/patients")
      .then(function (response) {
        setPatients(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    console.table(doctorId, description, userId);
    axios
      .post("/appointment", {
        doctorId,
        description,
        userId,
        isApproved: "approved",
      })
      .then(function (response) {
        console.log(response);
        if (response.data.code === 200) {
          toast.success("Appointment created succesfully!");
          setTimeout(() => {
            console.log("Hello, World!");
            nav("/admin-dashboard");
          }, 2500);
        } else {
          toast.error("Invalid error!");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      {/* <AdminNavbar /> */}
      <Sidebar />
      <div className="form-div">
        <form>
          <h1>Book Appointment Details</h1>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              rows="5"
              cols="50"
              className="form-control"
              id="name"
              onChange={(e) => setDescription(e.target.value)}
            />
            <label className="form-label">Doctor Name</label>
            <br></br>
            <select onChange={(e) => setDoctorId(e.target.value)}>
              <option disabled selected>
                --Select Doctor--
              </option>
              {doctors?.map((doctor, i) => {
                return (
                  <option key={i} value={doctor._id}>
                    {doctor.name}
                  </option>
                );
              })}
            </select>
            <br></br>
            <br></br>
            <label className="form-label">Patient Name</label>
            <br></br>
            <select onChange={(e) => setUserId(e.target.value)}>
              <option disabled selected>
                --Select Patient--
              </option>
              {patients?.map((patient, i) => {
                return (
                  <option key={i} value={patient._id}>
                    {patient.name}
                  </option>
                );
              })}
            </select>
            <br></br>
            <br></br>
          </div>
          <button type="submit" className="btn btn-primary" onClick={onSubmit}>
            Book
          </button>
          <ToastContainer />
        </form>
      </div>
    </>
  );
};

export default AdminAddAppointment;
