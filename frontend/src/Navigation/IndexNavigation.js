import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { setCommonType } from "./../Redux/Actions/CommonAction";
import AdminNavigation from "./AdminNavigation";
import PatientNavigation from "./PatientNavigation";
import DoctorNavigation from "./DoctorNavigation";
import AuthNavigation from "./AuthNavigation";
import axios from "axios";
import { setDoctorUser } from "../Redux/Actions/DoctorAction";
import { setAdminUser } from "../Redux/Actions/AdminAction";
import { setPatientUser } from "../Redux/Actions/PatientAction";
const IndexNavigation = (props) => {
  console.log(props);
  const dispatch = useDispatch();
  useEffect(() => {
    let type = localStorage.getItem("type");
    let data = JSON.parse(localStorage.getItem("data"));
    if (type === "admin") {
      axios
        .post("/admin/me", { id: data._id })
        .then((response) => {
          dispatch(setAdminUser(response.data.data));
        })
        .catch((e) => console.log(e));
    } else if (type === "doctor") {
      axios
        .post("/doctor/me", { id: data._id })
        .then((response) => {
          dispatch(setDoctorUser(response.data.data));
        })
        .catch((e) => console.log(e));
    } else if (type === "patient") {
      axios
        .post("/patient/me", { id: data._id })
        .then((response) => {
          dispatch(setPatientUser(response.data.data));
        })
        .catch((e) => console.log(e));
    }

    dispatch(setCommonType(type));
  }, [dispatch]);
  const { type } = props.common;
  console.log("type", type);
  return type === "admin" ? (
    <AdminNavigation />
  ) : type === "patient" ? (
    <PatientNavigation />
  ) : type === "doctor" ? (
    <DoctorNavigation />
  ) : (
    <AuthNavigation />
  );
};

const mapStateToProps = (state) => ({
  // admin: state.admin,
  common: state.common,
});

export default connect(mapStateToProps, {
  // clearAuthResponseMsg,
  // login,
})(IndexNavigation);
