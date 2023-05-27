import React, { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";
import { MdCancel, MdDoneOutline } from "react-icons/md";
import { GiCancel } from "react-icons/gi";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar";

const AdminApproveDoctor = () => {
  const [doctors, setDoctors] = useState();
  const nav = useNavigate();
  useEffect(() => {
    axios
      .get("doctor/doctors?isVerified=pending")
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
  }, []);
  const approveDoctor = (id) => {
    let isVerified = "approved";
    axios
      .patch(`admin/changeVerification/${id}?isVerified=approved`, {
        isVerified,
      })
      .then(function (response) {
        console.log(response);
        nav("/admin-dashboard");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const rejectDoctor = (id) => {
    let isVerified = "rejected";
    axios
      .patch(`admin/changeVerification/${id}?isVerified=rejected`, {
        isVerified,
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
    <>
      {/* <AdminNavbar /> */}
      <Sidebar />
      <div className="content">
        <div className="table-responsive">
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
                  Mobile
                </th>
                <th scope="col" className="table-color">
                  Address
                </th>
                <th scope="col" className="table-color">
                  Department
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
              {doctors?.map((doctor, i) => {
                return (
                  <tr key={i}>
                    <th scope="row">{i + 1}</th>
                    <td>{doctor.name}</td>
                    <td>{doctor.mobile}</td>
                    <td>{doctor.address}</td>
                    <td>{doctor.department}</td>
                    <td>
                      <MdDoneOutline
                        style={{ cursor: "pointer" }}
                        onClick={approveDoctor.bind(this, doctor._id)}
                      />
                    </td>
                    <td>
                      <GiCancel
                        style={{ cursor: "pointer" }}
                        onClick={rejectDoctor.bind(this, doctor._id)}
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

export default AdminApproveDoctor;
