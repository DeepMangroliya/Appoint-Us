import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "../Components/Navbar";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { connect } from "react-redux";
const PatientBookAppointment = (props) => {
  const nav = useNavigate();
  const [doctors, setDoctors] = useState();
  const [patients, setPatients] = useState();
  const [doctorId, setDoctorId] = useState();
  const [description, setDescription] = useState();
  // const [userId, setUserId] = useState();
  useEffect(() => {
    axios
      .get("/doctor/doctors", {})
      .then(function (response) {
        setDoctors(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  const { patientUser } = props.patient;
  const { _id } = patientUser;
  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/appointment", {
        doctorId,
        description,
        userId: _id,
        // isApproved: "approved",
      })
      .then(function (response) {
        console.log(response);
        if (response.data.code === 200) {
          toast.success(
            "Appointment created succesfully! Wait for Approvement!!"
          );
          setTimeout(() => {
            nav("/patient-dashboard");
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
      {/* <Navbar /> */}
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

const mapStateToProps = (state) => ({
  patient: state.patient,
});

export default connect(mapStateToProps, {
  // clearAuthResponseMsg,
  // login,
})(PatientBookAppointment);
