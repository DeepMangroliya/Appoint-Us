import React from "react";
import { MdEdit } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import DoctorNavbar from "./DoctorNavbar";
const DoctorDeleteAppointment = () => {
  return (
    <div>
      {/* <DoctorNavbar /> */}
      <p className="text-center mt-5">Patient</p>
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
              Description
            </th>
            <th scope="col" className="table-color">
              Symptoms
            </th>
            <th scope="col" className="table-color">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
              <AiFillDelete />
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Thornton</td>
            <td>
              <AiFillDelete />
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry the Bird</td>
            <td>Larry the Bird</td>
            <td>@twitter</td>
            <td>
              <AiFillDelete />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DoctorDeleteAppointment;
