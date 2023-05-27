import React, { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";
import { MdEdit } from "react-icons/md";
import { RiDeleteBinFill } from "react-icons/ri";
import Sidebar from "../Sidebar";
// import axios from "axios";
const AdminApprovePatient = () => {
  return (
    <>
      {/* <AdminNavbar /> */}
      <Sidebar />
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
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>name</td>
            <td>mobile</td>
            <td>address</td>
            <td>name</td>
            <td>
              <MdEdit />
            </td>
            <td>
              <RiDeleteBinFill />
            </td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>aaaname</td>
            <td>mobidssle</td>
            <td>addsddsdsress</td>
            <td>namsddsdse</td>
            <td>
              <MdEdit />
            </td>
            <td>
              <RiDeleteBinFill />
            </td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>nasddsdsme</td>
            <td>mossddsbile</td>
            <td>dsdsds</td>
            <td>dsdsd</td>
            <td>
              <MdEdit />
            </td>
            <td>
              <RiDeleteBinFill />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default AdminApprovePatient;
