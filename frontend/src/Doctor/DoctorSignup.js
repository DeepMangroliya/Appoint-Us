import axios from "axios";
import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./doctorLogin.css";
import { signup } from "./../Redux/Services/DoctorService";
import { connect } from "react-redux";
import Validation from "../Components/Validation";
const DoctorSignup = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [graduation, setGraduation] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [department, setDepartment] = useState("");

  const nav = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    console.table(name, email, password, mobile, address);
    // axios
    //   .post("/doctor/register", {
    //     name,
    //     email,
    //     password,
    //     mobile,
    //     graduation,
    //     address,
    //     department,
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //     console.log(response.data.status);
    //     if (response.data.status === 200) {
    // toast.success("Registration Successfully done. Now do login!");
    // setTimeout(() => {
    //   console.log("Hello, World!");
    //   nav("/doctorlogin");
    // }, 5000);
    //     } else {
    //       toast.error("Interal Server Error");
    //     }
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    const myobj = {
      name,
      email,
      password,
      mobile,
      graduation,
      address,
      department,
    };
    const result = await props.signup(myobj);
    if (result) {
      toast.success("Registration Successfully done. Now do login!");
      setTimeout(() => {
        console.log("Hello, World!");
        nav("/doctorlogin");
      }, 5000);
    }
  };
  const { loading, resError = {} } = props.doctor;

  return (
    <>
      {/* <Navbar /> */}
      <div className="form-div">
        <form>
          <h1>Doctor Register form</h1>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
            <Validation error={resError.name} />
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Validation error={resError.email} />

            <label className="form-label">Graduation</label>
            <input
              type="grduation"
              onChange={(e) => setGraduation(e.target.value)}
              className="form-control"
            />
            <Validation error={resError.graduation} />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Validation error={resError.password} />

            <label className="form-label">Mobile</label>
            <input
              type="number"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) => setMobile(e.target.value)}
            />
            <Validation error={resError.mobile} />

            <label className="form-label">Address</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setAddress(e.target.value)}
            />
            <Validation error={resError.address} />

            <label className="form-label">Department</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) => setDepartment(e.target.value)}
            />
            <Validation error={resError.department} />
          </div>
          <p>
            Exisitng user? <Link to="/doctorlogin">click here</Link>
          </p>
          <button type="submit" className="btn btn-primary" onClick={onSubmit}>
            Register
          </button>
        </form>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  doctor: state.doctor,
});

export default connect(mapStateToProps, {
  // clearAuthResponseMsg,
  signup,
})(DoctorSignup);
// export default DoctorSignup;
