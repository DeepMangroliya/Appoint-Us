import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
// import { DataContext } from "../context/DataContext";
import DoctorNavbar from "./DoctorNavbar";

const DoctorAppointment = () => {
  // const { doctorData } = useContext(DataContext);
  // console.log(doctorData);
  return (
    <>
      {/* <Navbar */}
      {/* <DoctorNavbar /> */}
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-sm-6 mt-3">
            <Link to="/doctor-view-appointment">
              <div className="card text-white bg-primary mb-3">
                <div className="card-header">Header</div>
                <div className="card-body">
                  <h5 className="card-title">View your appointments</h5>
                  <p className="card-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                  <h5 className="card-text">5</h5>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-2 col-sm-6 mt-3"></div>
          <div className="col-lg-5 col-sm-6 mt-3">
            <div className="card text-white bg-danger  mb-3">
              <div className="card-header">Header</div>
              <div className="card-body">
                <h5 className="card-title">Delete Appointment</h5>
                <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
                <h5 className="card-text">17</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorAppointment;
