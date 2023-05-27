import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import "./patientLogin.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { connect } from "react-redux";
import { login } from "../Redux/Services/PatientService";
import Validation from "./../Components/Validation";

const PatientLogin = (props) => {
  const nav = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { loading, resError = {} } = props.patient;

  const onSubmit = async (e) => {
    e.preventDefault();
    // console.log(email);
    const myobj = {
      email,
      password,
    };
    const result = await props.login(myobj);
    if (result) {
      toast.success("Login Successfully done!!");
      setTimeout(() => {
        nav("/patient-dashboard", { replace: true });
      }, 2500);
    }
    // axios
    //   .post("/patient/login", {
    //     email,
    //     password,
    //   })
    //   .then(function (response) {
    //     console.log(response.data);
    //     if (response.data.status === 200) {
    //       // setData(response.data.data);
    // localStorage.setItem("data", JSON.stringify(response.data.data));
    // toast.success("Login Successfully done!!");
    // setTimeout(() => {
    //   nav("/patient-dashboard");
    // }, 2500);
    //     } else {
    //       toast.error("Invalid Credentials!");
    //     }
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="form-div">
        <form>
          <h1>Patient form</h1>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Validation error={resError.email} />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
            <Validation error={resError.password} />
            New user? <Link to="/patientsignup">click here</Link>
          </div>
          <button type="submit" className="btn btn-primary" onClick={onSubmit}>
            Submit
          </button>
          <ToastContainer />
        </form>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  patient: state.patient,
});

export default connect(mapStateToProps, {
  // clearAuthResponseMsg,
  login,
})(PatientLogin);

// export default PatientLogin;
