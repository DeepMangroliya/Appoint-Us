import React, { useEffect, useState } from "react";
import { MdEdit } from "react-icons/md";
import { RiDeleteBinFill } from "react-icons/ri";
import DoctorNavbar from "./DoctorNavbar";
import axios from "axios";
import { connect } from "react-redux";

const DoctorViewAppointment = (props) => {
  const [appointments, setAppointments] = useState();
  let { loading, resError = {}, doctorUser } = props.doctor;

  useEffect(() => {
    axios
      .get(
        `/dischargedAppointmentByDr?doctorId=${doctorUser._id}&isDischarged=true`
      )
      .then(function (response) {
        console.log(response.data.data);
        setAppointments(response.data.data);
      })
      .catch(function (error) {
        console.log(error.response);
      });
  }, []);
  // console.log(appointments);
  return (
    <div>
      {/* <DoctorNavbar /> */}
      <div className="content">
        <p className="text-center mt-5">Discharged Patients</p>
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
                Description
              </th>
              <th scope="col" className="table-color">
                Mobile
              </th>
              <th scope="col" className="table-color">
                Address
              </th>
              <th scope="col" className="table-color">
                Appointment Date
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
                  <td>{appointment.userId.address}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// export default DoctorViewAppointment;
const mapStateToProps = (state) => ({
  doctor: state.doctor,
});
export default connect(mapStateToProps, {
  // clearAuthResponseMsg,
  // signup,
  // login,
  // adminPatients,
})(DoctorViewAppointment);
// export default DoctorDashboard;
