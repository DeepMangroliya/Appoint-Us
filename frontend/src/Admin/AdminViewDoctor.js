import React, { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";
import axios from "axios";
import { MdEdit } from "react-icons/md";
import { RiDeleteBinFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { connect } from "react-redux";
import { adminDoctors } from "./../Redux/Services/AdminService";
import Sidebar from "../Sidebar";

const AdminViewDoctor = (props) => {
  const nav = useNavigate();
  const [doctors, setDoctors] = useState();
  useEffect(() => {
    // axios
    //   .get("/doctor/doctors")
    //   .then(function (response) {
    //     setDoctors(response.data.data);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  }, []);
  // console.log(doctors);
  const { loading, adminUser, patientUsers, doctorUsers } = props.admin;
  console.log(doctorUsers);

  const deleteHandler = (id) => {
    console.log(id);
    axios
      .delete(`/doctor/${id}`)
      .then(function (response) {
        // console.log("deleted");
        toast.success("Doctor deleted succesfully!!");
        nav("/admin-dashboard");
      })
      .catch(function (error) {
        console.log(error);
        toast.error("Failed to delete! Try again!");
      });
  };

  const updateHander = (id) => {
    nav(`/admin-update-doctor/${id}`);
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
                  Update
                </th>
                <th scope="col" className="table-color">
                  Delete
                </th>
                <th scope="col" className="table-color">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {doctorUsers?.map((doctor, i) => {
                return (
                  <tr key={i}>
                    <th scope="row">{i + 1}</th>
                    <td>{doctor.name}</td>
                    <td>{doctor.mobile}</td>
                    <td>{doctor.address}</td>
                    <td>{doctor.department}</td>
                    <td>
                      <MdEdit
                        style={{ color: "blue", cursor: "pointer" }}
                        onClick={() => updateHander(doctor._id)}
                      />
                    </td>
                    <td>
                      <RiDeleteBinFill
                        style={{ color: "red", cursor: "pointer" }}
                        onClick={() => deleteHandler(doctor._id)}
                      />
                    </td>
                    <td>
                      {doctor.isVerified === "approved" ? (
                        <span id="h">Approved</span>
                      ) : doctor.isVerified === "pending" ? (
                        <span id="p">Pending</span>
                      ) : (
                        <span id="r">Rejected</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <ToastContainer position="bottom-right" />
          </table>
        </div>
      </div>
    </>
  );
};

// export default AdminViewDoctor;
const mapStateToProps = (state) => ({
  admin: state.admin,
});
export default connect(mapStateToProps, {
  // clearAuthResponseMsg,
  // signup,
  // adminDoctors,
  // adminPatients,
})(AdminViewDoctor);
