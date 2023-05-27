import axios from "axios";
import React, { useEffect, useState } from "react";
import DoctorNavbar from "../Doctor/DoctorNavbar";
import { useNavigate } from "react-router-dom";
import { ImExit } from "react-icons/im";
import { MdOutlineDoneOutline } from "react-icons/md";
import { connect } from "react-redux";
// getEBillByAppointmentId
const PatientCheckBills = (props) => {
  const nav = useNavigate();
  const [data, setData] = useState();
  let { loading, resError = {}, patientUser } = props.patient;
  // console.log(patientUser);

  useEffect(() => {
    axios
      .get(`getEBillByPatient?id=${patientUser._id}`)
      .then((response) => {
        console.log(response.data.data);
        setData(response.data.data);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <>
      {/* <DoctorNavbar /> */}
      <div className="content">
        <p className="text-center mt-5">E-Bills of Appointments</p>
        <table className="table table-data mt-2">
          <thead>
            <tr>
              <th scope="col" className="table-color">
                #
              </th>
              <th scope="col" className="table-color">
                PatientName
              </th>
              <th scope="col" className="table-color">
                Doctor Name
              </th>
              <th scope="col" className="table-color">
                Number of days
              </th>
              <th scope="col" className="table-color">
                Total
              </th>
              <th scope="col" className="table-color">
                Date
              </th>
              <th scope="col" className="table-color">
                Payment Status
              </th>
              <th scope="col" className="table-color">
                PayBill
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((d, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{d.patientId.name}</td>
                  <td>{d?.doctorId?.name}</td>
                  <td>{d.daySpent}</td>
                  <td>{d.total}</td>
                  <td>{d.date}</td>
                  <td>
                    {d.isPaymentDone ? (
                      <span id="h">Success</span>
                    ) : (
                      <span id="p">Pending</span>
                    )}
                  </td>
                  {/* <td>{d}</td>
                <td>{d}</td> */}
                  <td>
                    {!d.isPaymentDone ? (
                      <ImExit
                        disable
                        style={{
                          color: "red",
                          cursor: "pointer",
                        }}
                        onClick={() =>
                          nav(`/patient-e-bill/${d.appointmentId}`)
                        }
                      />
                    ) : (
                      <MdOutlineDoneOutline
                        style={{
                          color: "green",
                          // cursor: "no",
                        }}
                      />
                    )}
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

const mapStateToProps = (state) => ({
  patient: state.patient,
});
export default connect(mapStateToProps, {})(PatientCheckBills);
