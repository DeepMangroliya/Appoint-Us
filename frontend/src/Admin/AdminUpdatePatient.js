import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "./../Sidebar";
import AdminNavbar from "./AdminNavbar";

const AdminUpdatePatient = () => {
  let params = useParams();
  let id = params.id;
  const nav = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState("");
  const [symptom, setSymptom] = useState("");
  useEffect(() => {
    axios
      .get(`/patient/patients?id=${id}`)
      .then(function (response) {
        setName(response.data.data.name);
        setPhone(response.data.data.phone);
        setEmail(response.data.data.email);
        setPassword(response.data.data.password);
        setSymptom(response.data.data.symptom);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const updateHandler = (e) => {
    e.preventDefault();
    axios
      .patch(`/patient/${id}`, { name, phone, symptom })
      .then(function (response) {
        console.log(response);
        console.log(response.data.status);
        if (response.data.status === 201) {
          toast.success("Data updated successfully!!");
          setTimeout(() => {
            nav("/admin-dashboard");
          }, 3000);
        } else {
          toast.error("Interal Server Error");
        }
      });
  };
  return (
    <>
      {/* <AdminNavbar /> */}
      <Sidebar />
      {/* <div className="content"> */}
      <div className="form-div">
        <form>
          <h1>Update Patient Details</h1>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="email"
              className="form-control"
              id="name"
              aria-describedby="emailHelp"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              disabled
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <label for="exampleInputEmail1" className="form-label">
              Phone
            </label>
            <input
              type="number"
              className="form-control"
              id="age"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={password}
              disabled
            />
          </div>
          <label for="exampleInputEmail1" className="form-label">
            Symptom
          </label>
          <input
            value={symptom}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setSymptom(e.target.value)}
          />
          <button
            type="submit"
            className="btn btn-primary mt-3"
            onClick={updateHandler}
          >
            Submit
          </button>
        </form>
      </div>
      {/* </div> */}
    </>
  );
};

export default AdminUpdatePatient;
