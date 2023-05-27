import React, { useEffect, useState } from "react";
import PatientNavbar from "./PatientNavbar";
import { MdEdit } from "react-icons/md";
import { RiDeleteBinFill } from "react-icons/ri";
import axios from "axios";
import { connect } from "react-redux";
const PatientViewAppointment = (props) => {
  const [data, setData] = useState();
  const { patientUser } = props.patient;
  const { _id } = patientUser;

  useEffect(() => {
    axios
      .get(`/appointmentsByuser?userId=${_id}`)
      .then((response) => {
        console.log(response.data.data);
        setData(response.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <>
      {/* <PatientNavbar /> */}
      <div className="content">
        <p className="text-center mt-5">Your Appointments</p>
        <table className="table table-data mt-2">
          <thead>
            <tr>
              <th scope="col" className="table-color">
                #
              </th>
              <th scope="col" className="table-color">
                Doctor Name
              </th>
              <th scope="col" className="table-color">
                Description
              </th>
              <th scope="col" className="table-color">
                Appointment Status
              </th>
              <th scope="col" className="table-color">
                Discharged
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((d, i) => {
              return (
                <tr>
                  <th scope="row">{i + 1}</th>
                  <td>{d.doctorId.name}</td>
                  <td>{d.description}</td>
                  <td>{d.isApproved}</td>
                  <td>{d.isDischarged ? "Yes" : "No"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

// export default PatientViewAppointment;
const mapStateToProps = (state) => ({
  patient: state.patient,
});

export default connect(mapStateToProps, {
  // clearAuthResponseMsg,
  // login,
})(PatientViewAppointment);
