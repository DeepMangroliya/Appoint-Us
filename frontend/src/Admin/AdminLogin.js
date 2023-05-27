import React, { useState, useContext } from "react";
import Navbar from "../Components/Navbar";
import "./adminLogin.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { connect } from "react-redux";
import { login } from "../Redux/Services/AdminService";
import Validation from "../Components/Validation";
const AdminLogin = (props) => {
  const nav = useNavigate();
  // const { data, setAdmin } = useContext(DataContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    // axios
    //   .post("/admin/login", {
    //     email,
    //     password,
    //   })
    //   .then(function (response) {
    //     // console.log(response.data.data);
    //     if (response.data.status === 200) {
    //       localStorage.setItem("data", JSON.stringify(response.data.data));
    //       // setAdmin(response.data.data);
    //       toast.success("Login Successfully done!!");
    //       setTimeout(() => {
    //         console.log("Hello, World!");
    //         nav("/admin-dashboard");
    //       }, 2500);
    //     } else {
    //       toast.error("Invalid Credentials!");
    //     }
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    const myObj = {
      email,
      password,
    };
    const result = await props.login(myObj);
    if (result) {
      toast.success("Login Successfully done.");
      setTimeout(() => {
        nav("/admin-dashboard", { replace: true });
      }, 1000);
      // alert("done");
    }
  };
  const { loading, resError = {} } = props.admin;

  return (
    <>
      {/* <Navbar /> */}
      <div className="form-div">
        <form>
          <h1>Admin form</h1>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Validation error={resError.email} />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="on"
            />
            <Validation error={resError.password} />
            New user? <Link to="/adminsignup">click here</Link>
          </div>
          <button type="submit" className="btn btn-primary" onClick={onSubmit}>
            Submit
          </button>
        </form>
        <ToastContainer autoClose={2000} />
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  admin: state.admin,
});

export default connect(mapStateToProps, {
  // clearAuthResponseMsg,
  login,
})(AdminLogin);
