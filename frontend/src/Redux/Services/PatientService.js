import { isEmail } from "./../../Helpers";
import { setPatientUser } from "../Actions/PatientAction";
import axios from "axios";
import { setPatientResponseError } from "../Actions/PatientAction";
import { setCommonType } from "./../Actions/CommonAction";
export const signup = (obj) => async (dispatch) => {
  try {
    console.log(" ji ", obj);
    // dispatch(clearAuthResponseMsg());
    if (!obj) {
      dispatchPatientError("name", "Name is required", dispatch);
      return;
    } else if (!obj.name) {
      dispatchPatientError("name", "Name is required", dispatch);
      return;
    } else if (!obj.email) {
      dispatchPatientError("email", "Email is Required", dispatch);
      return;
    } else if (isEmail(obj.email) === false) {
      dispatchPatientError("email", "Invalid email", dispatch);
      return;
    } else if (!obj.password) {
      dispatchPatientError("password", "Password is Required", dispatch);
      return;
    } else if (!obj.phone) {
      dispatchPatientError("phone", "phone number is Required", dispatch);
      return;
    } else if (obj.phone.length !== 10) {
      dispatchPatientError("phone", "enter valid phone number", dispatch);
      return;
    } else if (!obj.symptom) {
      dispatchPatientError("symptom", "symptom is Required", dispatch);
      return;
    } else if (!obj.address) {
      dispatchPatientError("address", "address is Required", dispatch);
      return;
    }
    // dispatch(setDoctorLoader(true));
    const response = await axios.post(`/patient/register`, obj);
    console.log(response.data);
    const { data } = response.data;
    // dispatch(setAdminUser(data));
    return true;
  } catch (e) {
    dispatchPatientError(
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
      dispatchPatientError("email", "Email is required", dispatch);
      return;
    } else if (!obj.email) {
      dispatchPatientError("email", "Email is required", dispatch);
      return;
    } else if (isEmail(obj.email) === false) {
      dispatchPatientError("email", "Invalid email", dispatch);
      return;
    } else if (!obj.password) {
      dispatchPatientError("password", "Password is Required", dispatch);
      return;
    }
    // dispatch(setAdminLoader(true));
    const response = await axios.post(`/patient/login`, obj);
    console.log(response.data.data, "________________");
    const { data } = response.data;
    dispatch(setPatientUser(data));
    dispatch(setCommonType("patient"));
    // localStorage.setItem("data", JSON.stringify(data));
    localStorage.setItem("type", "patient");
    return true;
  } catch (e) {
    dispatchPatientError(
      "error",
      "Unable to login, please try again",
      dispatch
    );
    return false;
  } finally {
    // dispatch(setAdminLoader(false));
  }
};

function dispatchPatientError(field, msg, dispatch) {
  dispatch(setPatientResponseError({ field, msg }));
}
