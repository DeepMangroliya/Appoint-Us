import { isEmail } from "./../../Helpers";
import { setDoctorResponseError, setDoctorUser } from "../Actions/DoctorAction";
import axios from "axios";
import { setCommonType } from "./../Actions/CommonAction";
export const signup = (obj) => async (dispatch) => {
  try {
    // console.log(obj);
    // dispatch(clearAuthResponseMsg());
    if (!obj) {
      dispatchDoctorError("name", "Name is required", dispatch);
      return;
    } else if (!obj.name) {
      dispatchDoctorError("name", "Name is required", dispatch);
      return;
    } else if (!obj.email) {
      dispatchDoctorError("email", "Email is Required", dispatch);
      return;
    } else if (isEmail(obj.email) === false) {
      dispatchDoctorError("email", "Invalid email", dispatch);
      return;
    } else if (!obj.graduation) {
      dispatchDoctorError("graduation", "Graduation is Required", dispatch);
      return;
    } else if (!obj.password) {
      dispatchDoctorError("password", "Password is Required", dispatch);
      return;
    } else if (!obj.mobile) {
      dispatchDoctorError("mobile", "Mobile is Required", dispatch);
      return;
    } else if (!obj.address) {
      dispatchDoctorError("address", "Address is Required", dispatch);
      return;
    } else if (!obj.department) {
      dispatchDoctorError("department", "Department is Required", dispatch);
      return;
    }
    // dispatch(setDoctorLoader(true));
    const response = await axios.post(`/doctor/register`, obj);
    // console.log(response.data);
    const { data } = response.data;
    dispatch(setDoctorUser(data));
    return true;
  } catch (e) {
    dispatchDoctorError(
      "error",
      "Unable to signup, please try again",
      dispatch
    );
    return false;
  } finally {
    // dispatch(setAdminLoader(false));
  }
};
export const login = (obj) => async (dispatch) => {
  try {
    console.log(obj);
    // dispatch(clearAuthResponseMsg());
    if (!obj) {
      dispatchDoctorError("email", "Email is required", dispatch);
      return;
    } else if (!obj.email) {
      dispatchDoctorError("email", "Email is required", dispatch);
      return;
    } else if (isEmail(obj.email) === false) {
      dispatchDoctorError("email", "Invalid email", dispatch);
      return;
    } else if (!obj.password) {
      dispatchDoctorError("password", "Password is Required", dispatch);
      return;
    }
    // dispatch(setAdminLoader(true));
    const response = await axios.post(`/doctor/login`, obj);
    // console.log(response.data);
    const { data } = response.data;
    dispatch(setDoctorUser(data));
    dispatch(setCommonType("doctor"));
    localStorage.setItem("data", JSON.stringify(data));
    localStorage.setItem("type", "doctor");
    return true;
  } catch (e) {
    dispatchDoctorError("error", "Unable to login, please try again", dispatch);
    return false;
  } finally {
    // dispatch(setAdminLoader(false));
  }
};

function dispatchDoctorError(field, msg, dispatch) {
  dispatch(setDoctorResponseError({ field, msg }));
}
