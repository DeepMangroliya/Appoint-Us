import React, { useState, useEffect, useContext } from "react";
import AdminNavbar from "./AdminNavbar";
import "./AdminDashboard.css";
import axios from "axios";
import DataContext from "../Context/DataContext";
import "./Loading.css";
import Sidebar from "./../Sidebar";
// import "./../Sidebar.css";
import { connect } from "react-redux";
import moment from "moment";
import { adminDoctors, adminPatients } from "./../Redux/Services/AdminService";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
const AdminDashboard = (props) => {
  const [patients, setPatients] = useState();
  const [doctors, setDoctors] = useState();
  const [appointments, setAppointments] = useState();

  // const data = useContext(DataContext);
  // setHello("hi 2");
  // setObj("hi 2");
  // console.log(data);

  useEffect(() => {
    axios
      .get("/patient/patients")
      .then(function (response) {
        if (response.data.status === 200) {
          setPatients(response.data.data);
        } else {
          alert("Sorry");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    axios
      .get("/doctor/doctors")
      .then(function (response) {
        if (response.data.status === 200) {
          setDoctors(response.data.data);
        } else {
          alert("Sorry");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    axios
      .get("/appointment")
      .then(function (response) {
        // console.log(response.data.data);
        if (response.data.status === 200) {
          setAppointments(response.data.data);
        } else {
          alert("Sorry");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    loadData();
  }, []);
  const loadData = async () => {
    await props.adminDoctors();
    await props.adminPatients();
    // await props.adminDoctors();
  };
  // console.log(doctors && doctors[0].isVerified);

  if (!patients && !doctors && !appointments) {
    return <div className="loader"></div>;
  }
  const { loading, adminUser, patientUsers, doctorUsers } = props.admin;
  console.log(typeof patientUsers);

  return (
    <>
      {/* <AdminNavbar /> */}
      {/* <Navbar /> */}
      <Sidebar />
      <div className="content">
        <div className="row">
          <div className="col-lg-4 col-sm-6 mt-3">
            <div className="card text-white bg-primary mb-3">
              <div className="card-header">Header</div>
              <div className="card-body">
                <h5 className="card-title">Total Doctor</h5>
                <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <h5 className="card-text">{doctors?.length}</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mt-3">
            <div className="card text-white bg-secondary mb-3">
              <div className="card-header">Header</div>
              <div className="card-body">
                <h5 className="card-title">Total Patient</h5>
                <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <h5 className="card-text">{patients?.length}</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mt-3">
            <div className="card text-white bg-danger  mb-3">
              <div className="card-header">Header</div>
              <div className="card-body">
                <h5 className="card-title">Total Appointment</h5>
                <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <h5 className="card-text">{appointments?.length}</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="table-responsive">
                {/* <div className="table-data"> */}
                <div className="text-center">
                  <h6 className="text-center">Recent Doctors</h6>
                </div>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col" className="table-color">
                        #
                      </th>
                      <th scope="col" className="table-color">
                        Name
                      </th>
                      <th scope="col" className="table-color">
                        Department
                      </th>
                      <th scope="col" className="table-color">
                        Mobile
                      </th>
                      <th scope="col" className="table-color">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {doctorUsers?.map((doctor, index) => {
                      return (
                        <tr key={index}>
                          <th scope="row">{index + 1}</th>
                          <td>{doctor.name}</td>
                          <td>{doctor.department}</td>
                          <td>{doctor.mobile}</td>
                          <td>{doctor.isVerified ? "yes" : "no"}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="table-responsive">
                <div className="text-center">
                  <h6 className="text-center">Recent Patients</h6>
                </div>
                <table className="table ">
                  <thead>
                    <tr>
                      <th scope="col" className="table-color">
                        #
                      </th>
                      <th scope="col" className="table-color">
                        name
                      </th>
                      <th scope="col" className="table-color">
                        description
                      </th>
                      <th scope="col" className="table-color">
                        Mobile
                      </th>
                      <th scope="col" className="table-color">
                        Address
                      </th>
                      <th scope="col" className="table-color">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {patientUsers?.map((patient, index) => {
                      return (
                        <tr key={index}>
                          <th scope="row">{index + 1}</th>
                          <td>{patient.name}</td>
                          <td>{patient.email}</td>
                          <td>{patient.phone}</td>
                          <td>{patient.name}</td>
                          <td>{moment(patient.date).format("LL")}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// export default AdminDashboard;
const mapStateToProps = (state) => ({
  admin: state.admin,
});
export default connect(mapStateToProps, {
  // clearAuthResponseMsg,
  // signup,
  adminDoctors,
  adminPatients,
})(AdminDashboard);
// adminUser;
