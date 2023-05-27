import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../Components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./../Sidebar";

const AdminUpdateDoctor = () => {
  let params = useParams();
  let id = params.id;
  const nav = useNavigate();

  const [name, setName] = useState("");
  const [graduation, setGraduation] = useState("");
  const [address, setAddress] = useState("");
  const [department, setDepartment] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    axios
      .get(`/doctor/doctors?id=${id}`)
      .then(function (response) {
        setName(response.data.data.name);
        setGraduation(response.data.data.graduation);
        setAddress(response.data.data.address);
        setDepartment(response.data.data.department);
        setEmail(response.data.data.email);
        setPassword(response.data.data.password);
        setDepartment(response.data.data.department);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const updateHandler = (e) => {
    e.preventDefault();
    axios
      .patch(`/doctor/${id}`, { name, graduation, address, department })
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
      {/* <Navbar /> */}
      <Sidebar />
      <div className="content">
        <form>
          <h1>Update Doctor Details</h1>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label className="form-label">Email</label>
            <input
              type="text"
              className="form-control"
              id="email"
              disabled
              value={email}
              readOnly
            />
            <label className="form-label">Graduation</label>
            <input
              type="text"
              className="form-control"
              value={graduation}
              onChange={(e) => setGraduation(e.target.value)}
            />
            <label className="form-label">Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" disabled>
              Password
            </label>
            <input
              type="password"
              className="form-control"
              disabled
              value={password}
              readOnly
            />
            <label className="form-label">Department</label>
            <input
              type="text"
              className="form-control"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            />
          </div>
          <p>
            Exisitng user? <Link to="/doctorlogin">click here</Link>
          </p>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={updateHandler}
          >
            Update
          </button>
          <ToastContainer />
        </form>
      </div>
    </>
  );
};

export default AdminUpdateDoctor;
