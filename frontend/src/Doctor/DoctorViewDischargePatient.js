import React, { useEffect, useState } from "react";
import { MdEdit } from "react-icons/md";
import { ImExit } from "react-icons/im";
import axios from "axios";
import DoctorNavbar from "./DoctorNavbar";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

const DoctorViewDischargePatient = (props) => {
  const nav = useNavigate();
  const [appointments, setAppointments] = useState();
  let { loading, resError = {}, doctorUser } = props.doctor;

  console.log(doctorUser._id);
  useEffect(() => {
    axios
      .get(
        `/dischargedAppointmentByDr?doctorId=${doctorUser._id}&isDischarged=false`
      )
      .then(function (response) {
        console.log(response.data.data);
        setAppointments(response.data.data);
        console.log(response.data.data);
      })
      .catch(function (error) {
        console.log(error.response);
      });
  }, []);
  return (
    <>
      {/* <DoctorNavbar /> */}
      <div className="content">
        <p className="text-center mt-5">Doctors</p>
        <table className="table table-data mt-2">
          <thead>
            <tr>
              <th scope="col" className="table-color">
                #
              </th>
              <th scope="col" className="table-color">
                Name
              </th>
              <th scope="col" className="table-color">
                Admit Date
              </th>
              <th scope="col" className="table-color">
                Release Date
              </th>
              <th scope="col" className="table-color">
                Symptoms
              </th>
              <th scope="col" className="table-color">
                Mobile
              </th>
              <th scope="col" className="table-color">
                Discharge
              </th>
            </tr>
          </thead>
          <tbody>
            {appointments?.map((appointment, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  {/* <td>{appointment}</td> */}
                  <td>{appointment.userId.name}</td>
                  <td>{appointment.description}</td>
                  <td>{appointment.userId.phone}</td>
                  <td>{appointment.userId.phone}</td>
                  <td>{appointment.userId.phone}</td>
                  <td>
                    <ImExit
                      style={{
                        color: "red",
                        cursor: "pointer",
                      }}
                      onClick={() =>
                        nav(
                          `/generate-ebill/${appointment._id}/${appointment.userId._id}/${appointment.doctorId}`
                        )
                      }
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

// export default DoctorViewDischargePatient;
const mapStateToProps = (state) => ({
  doctor: state.doctor,
});
export default connect(mapStateToProps, {
  // clearAuthResponseMsg,
  // signup,
  // login,
  // adminPatients,
})(DoctorViewDischargePatient);
