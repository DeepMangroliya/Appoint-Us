import React, { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";
import axios from "axios";
import moment from "moment-timezone";
import Sidebar from "../Sidebar";

const AdminViewAppointment = () => {
  const [appointments, setAppointments] = useState();
  useEffect(() => {
    axios
      .get("/appointment")
      .then(function (response) {
        console.log(response);
        setAppointments(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <>
      {/* <AdminNavbar /> */}
      <Sidebar />
      <div className="content">
        <div className="table-responsive">
          <p className="text-center mt-5">Appointments</p>
          <table className="table table-data mt-2">
            <thead>
              <tr>
                <th scope="col" className="table-color">
                  #
                </th>
                <th scope="col" className="table-color">
                  DoctorName
                </th>
                <th scope="col" className="table-color">
                  Patient Name
                </th>
                <th scope="col" className="table-color">
                  Description
                </th>
                <th scope="col" className="table-color">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {appointments?.map((appointment, index) => {
                console.table(appointment.userId);
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{appointment?.doctorId.name}</td>
                    <td>
                      {appointment?.userId
                        ? appointment?.userId.name
                        : "no found"}
                    </td>
                    <td>{appointment?.description}</td>
                    <td>{moment(appointment?.createdAt).format("LL")}</td>
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

export default AdminViewAppointment;
