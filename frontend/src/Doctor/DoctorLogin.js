import React, { useContext, useState } from "react";
import Navbar from "../Components/Navbar";
import "./doctorLogin.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { login } from "../Redux/Services/DoctorService";
// import { DoctorContext } from "../context/DoctorContext";
// import DataState from "../context/DataState";
// import { DataContext } from "../context/DataContext";
import { connect } from "react-redux";
import Validation from "./../Components/Validation";

const DoctorLogin = (props) => {
  const nav = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  let { loading, resError = {}, doctorUser } = props.doctor;

  const onSubmit = async (e) => {
    e.preventDefault();
    const myobj = { email, password };
    // axios
    //   .post("/doctor/login", {
    //     email,
    //     password,
    //   })
    //   .then(function (response) {
    //     if (response.data.status === 200) {
    //       // updateDoctorDeails(response.data.data);
    //       localStorage.setItem("data", JSON.stringify(response.data.data));

    //     } else {
    //       toast.error("Invalid Credentials!");
    //     }
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
    const result = await props.login(myobj);
    if (result) {
      toast.success("Login Successfully done!!");
      console.log(doctorUser?.isVerified);
      if (doctorUser?.isVerified !== undefined) {
        if (doctorUser?.isVerified === "approved")
          setTimeout(() => {
            nav("/doctor-dashboard", { replace: true });
          }, 2500);
        else {
          setTimeout(() => {
            nav("/doctor-waiting", {
              state: { id: doctorUser.isVerified },
            });
          }, 2500);
        }
      }
    }
  };
  // console.log(doctorData);
  return (
    <>
      {/* <Navbar /> */}
      <div className="form-div">
        <form>
          <h1>Doctor form</h1>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="text"
              className="form-control"
              id="em"
              aria-describedby="em"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Validation error={resError.email} />
            <div id="em" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Validation error={resError.password} />
          </div>
          <p>
            New user? <a href="/doctorsignup">click here</a>
          </p>
          <button type="submit" className="btn btn-primary" onClick={onSubmit}>
            Login
          </button>
        </form>
        <ToastContainer autoClose={2000} />
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  doctor: state.doctor,
});
export default connect(mapStateToProps, {
  // clearAuthResponseMsg,
  // signup,
  login,
  // adminPatients,
})(DoctorLogin);
