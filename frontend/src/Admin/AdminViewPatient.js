import React, { useState, useEffect } from "react";
import AdminNavbar from "./AdminNavbar";
import axios from "axios";
import { MdEdit } from "react-icons/md";
import { RiDeleteBinFill } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Sidebar from "./../Sidebar";

const AdminViewPatient = () => {
  const nav = useNavigate();
  const [patients, setPatients] = useState();
  useEffect(() => {
    axios
      .get("patient/patients")
      .then(function (response) {
        if (response.data.status === 200) {
          setPatients(response.data.data);
        } else {
          alert("Sorry");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  const deleteHandler = (id) => {
    console.log(id);
    axios
      .delete(`/patient/${id}`)
      .then(function (response) {
        console.log("deleted");
        toast.success("Doctor deleted succesfully!!");
      })
      .catch(function (error) {
        console.log(error);
        toast.error("Failed to delete! Try again!");
      });
  };
  const updateHander = (id) => {
    nav(`/admin-update-patient/${id}`);
  };
  return (
    <>
      {/* <AdminNavbar /> */}
      <Sidebar />
      <div className="content">
        <div className="table-responsive">
          <p className="text-center mt-5">Patient</p>
          <table className="table table-data mt-2">
            <thead>
              <tr>
                <th scope="col" className="table-color">
                  #
                </th>
                <th scope="col" className="table-color">
                  name
                </th>
                <th scope="col" className="table-color">
                  symptoms
                </th>
                <th scope="col" className="table-color">
                  Mobile
                </th>
                <th scope="col" className="table-color">
                  address
                </th>
                <th scope="col" className="table-color">
                  update
                </th>
                <th scope="col" className="table-color">
                  delete
                </th>
              </tr>
            </thead>
            <tbody>
              {patients?.map((patient, index) => {
                return (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{patient.name}</td>
                    <td>{patient.symptom}</td>
                    <td>{patient.phone}</td>
                    <td>dummy for now</td>
                    <td>
                      <MdEdit
                        style={{ color: "blue", cursor: "pointer" }}
                        onClick={() => updateHander(patient._id)}
                      />
                    </td>
                    <td>
                      <RiDeleteBinFill
                        style={{ color: "red", cursor: "pointer" }}
                        onClick={() => deleteHandler(patient._id)}
                      />
                    </td>{" "}
                  </tr>
                );
              })}
            </tbody>
            <ToastContainer />
          </table>
        </div>
      </div>
    </>
  );
};

export default AdminViewPatient;
