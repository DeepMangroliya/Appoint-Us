import React, { useDebugValue, useEffect, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import DoctorNavbar from "./DoctorNavbar";
const DoctorViewPatient = (props) => {
  const [patients, setPatients] = useState();
  let { loading, resError = {}, doctorUser } = props.doctor;

  useEffect(() => {
    console.log(doctorUser);
    axios
      .get(`/appointmentWithUser?doctorId=${doctorUser._id}`)
      .then(function (response) {
        if (response.data.status === 200) {
          console.log(response.data.data);
          setPatients(response.data.data);
        } else {
          alert("Sorry");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <>
      {/* <DoctorNavbar /> */}
      <div className="content">
        <div className="table-data">
          <p className="text-center mt-5">All Patients</p>
          <table className="table ">
            <thead>
              <tr>
                <th scope="col" className="table-color">
                  #
                </th>
                <th scope="col" className="table-color">
                  Patient name
                </th>
                <th scope="col" className="table-color">
                  description
                </th>
                <th scope="col" className="table-color">
                  Mobile
                </th>
                <th scope="col" className="table-color">
                  Status
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
              {patients?.map((patient, i) => {
                console.log(patient);
                return (
                  <tr key={i}>
                    <th scope="row">{i + 1}</th>
                    <td>{patient.userId?.name}</td>
                    <td>{patient.description}</td>
                    <td>{patient.userId?.phone}</td>
                    <td>
                      {patient.isDischarged ? "Discharged" : "Under Treatment"}
                    </td>
                    <td>dummy address</td>
                    <td>dummy date</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  doctor: state.doctor,
});
export default connect(mapStateToProps, {
  // clearAuthResponseMsg,
  // signup,
  // login,
  // adminPatients,
})(DoctorViewPatient);
