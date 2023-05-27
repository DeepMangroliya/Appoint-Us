import axios from "axios";
import { isEmail } from "./../../Helpers";
import { setCommonType } from "./../Actions/CommonAction";
import {
  setAdminDoctors,
  setAdminLoader,
  setAdminPatients,
  setAdminResponseError,
  setAdminUser,
} from "./../Actions/AdminAction";

export const signup = (obj) => async (dispatch) => {
  try {
    console.log("ob__________j", obj);
    // dispatch(clearAuthResponseMsg());
    if (!obj) {
      dispatchAdminError("name", "Name is required", dispatch);
      return;
    } else if (!obj.name) {
      dispatchAdminError("name", "Name is required", dispatch);
      return;
    } else if (!obj.email) {
      dispatchAdminError("email", "Email is Required", dispatch);
      return;
    } else if (isEmail(obj.email) === false) {
      dispatchAdminError("email", "Invalid email", dispatch);
      return;
    } else if (!obj.password) {
      dispatchAdminError("password", "Password is Required", dispatch);
      return;
    } else if (!obj.phone) {
      dispatchAdminError("phone", "phone number is Required", dispatch);
      return;
    }
    dispatch(setAdminLoader(true));
    const response = await axios.post(`/admin/register`, obj);
    console.log(response.data);
    const data = response.data;
    // dispatch(setAdminUser(data));
    console.log(data.status);
    if (data.status === 200) {
      console.log("hi");
      return true;
    } else {
      dispatchAdminError("error", "User already exist", dispatch);
      return false;
    }
  } catch (e) {
    dispatchAdminError("error", "Unable to signup, please try again", dispatch);
    return false;
  } finally {
    dispatch(setAdminLoader(false));
  }
};
export const login = (obj) => async (dispatch) => {
  try {
    // console.log(obj);
    // dispatch(clearAuthResponseMsg());
    if (!obj) {
      dispatchAdminError("email", "Email is Required", dispatch);
      return;
    } else if (!obj.email) {
      dispatchAdminError("email", "Email is Required", dispatch);
      return;
    } else if (isEmail(obj.email) === false) {
      dispatchAdminError("email", "Invalid email", dispatch);
      return;
    } else if (!obj.password) {
      dispatchAdminError("password", "Password is Required", dispatch);
      return;
    }
    dispatch(setAdminLoader(true));
    const response = await axios.post(`/admin/login`, obj);
    // console.log(response.data);
    const { data } = response.data;
    console.log("data", data);
    dispatch(setAdminUser(data));
    dispatch(setCommonType("admin"));
    localStorage.setItem("data", JSON.stringify(data));
    localStorage.setItem("type", "admin");
    return true;
  } catch (e) {
    console.log("e", e);
    dispatchAdminError("error", "Unable to login, please try again", dispatch);
    return false;
  } finally {
    dispatch(setAdminLoader(false));
  }
};
export const adminDoctors = () => async (dispatch) => {
  try {
    const response = await axios.get("/doctor/doctors");
    const { data } = response.data;
    dispatch(setAdminDoctors(data));
  } catch (e) {
    dispatchAdminError(
      "error",
      "Unable to load data, please try again",
      dispatch
    );
    return false;
  } finally {
    dispatch(setAdminLoader(false));
  }
};
export const adminPatients = () => async (dispatch) => {
  try {
    const response = await axios.get("/patient/patients");
    const { data } = response.data;

    console.log(data);
    dispatch(setAdminPatients(data));
  } catch (e) {
    dispatchAdminError(
      "error",
      "Unable to load data, please try again",
      dispatch
    );
    return false;
  } finally {
    dispatch(setAdminLoader(false));
  }
};

function dispatchAdminError(field, msg, dispatch) {
  dispatch(setAdminResponseError({ field, msg }));
}
