import React, { useState, useEffect, useContext } from "react";
import AdminNavbar from "./AdminNavbar";
import { IoMdExit } from "react-icons/io";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar";

const AdminDischargePatient = () => {
  const [appointments, setAppointments] = useState();
  const nav = useNavigate();
  useEffect(() => {
    const doctorId = JSON.parse(localStorage.getItem("data"))._id;
    // console.log(doctorId);
    axios
      .get(`/admin/discharge/`)
      .then(function (response) {
        console.log(response.data.data);
        setAppointments(response.data.data);
        // setAppointments(response.data.data._id);
      })
      .catch(function (error) {
        console.log(error.response);
      });
  }, []);
  return (
    <>
      {/* <AdminNavbar /> */}
      <Sidebar />
      <div className="content">
        <div className="table-responsive">
          <p className="text-center mt-5">Discharge Patient</p>
          <table className="table table-data mt-2">
            <thead>
              <tr>
                <th scope="col" className="table-color">
                  #
                </th>
                <th scope="col" className="table-color">
                  Patient Name
                </th>
                <th scope="col" className="table-color">
                  Doctor Name
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
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{appointment.userId.name}</td>
                    <td>{appointment.doctorId.name}</td>
                    <td>{appointment.userId.symptom}</td>
                    <td>{appointment.userId.phone}</td>
                    <td>
                      <IoMdExit
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          nav(
                            `/admin-bill/${appointment._id}/${appointment.doctorId._id}/${appointment.userId._id}`
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
      </div>
    </>
  );
};

export default AdminDischargePatient;
