import React, { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";
import axios from "axios";
import moment from "moment-timezone";
import { MdDoneOutline } from "react-icons/md";
import { GiCancel } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar";

const AdminApproveAppointment = () => {
  const [appointments, setAppointments] = useState();
  const nav = useNavigate();
  useEffect(() => {
    axios
      .get("/appointment?isApproved=pending")
      .then(function (response) {
        setAppointments(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const onApprove = (id) => {
    console.log(id);
    let isApproved = "approved";
    axios
      .patch(`admin/changeAppointmentVerification/${id}?isApproved=approved`, {
        isApproved,
      })
      .then(function (response) {
        console.log(response);
        nav("/admin-dashboard");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const onReject = (id) => {
    console.log(IDBVersionChangeEvent);
    let isApproved = "rejected";
    axios
      .patch(`admin/changeAppointmentVerification/${id}?isApproved=rejected`, {
        isApproved,
      })
      .then(function (response) {
        // if (response.data.status === 200) {
        //   setDoctors(response.data.data);
        // } else {
        //   alert("Sorry");
        // }
        nav("/admin-dashboard");

        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      {/* <AdminNavbar /> */}
      <Sidebar />
      <div className="content">
        <div className="table-responsive">
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
                  Patient Name
                </th>
                <th scope="col" className="table-color">
                  Description
                </th>
                <th scope="col" className="table-color">
                  Date
                </th>
                <th scope="col" className="table-color">
                  Approve
                </th>
                <th scope="col" className="table-color">
                  Reject
                </th>
              </tr>
            </thead>
            <tbody>
              {appointments?.map((appointment, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{appointment.doctorId.name}</td>
                    <td>
                      {appointment.userId
                        ? appointment.userId.name
                        : "no found"}
                    </td>
                    <td>{appointment.description}</td>
                    <td>{moment(appointment.createdAt).format("LL")}</td>
                    <td>
                      <MdDoneOutline
                        style={{ cursor: "pointer", color: "green" }}
                        onClick={() => onApprove(appointment._id)}
                      />
                    </td>
                    <td>
                      <GiCancel
                        style={{ cursor: "pointer", color: "red" }}
                        onClick={() => onReject(appointment._id)}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminApproveAppointment;
