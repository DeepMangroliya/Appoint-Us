import { combineReducers } from "redux";
import adminReducer from "../Reducers/AdminReducer";
import doctorReducer from "../Reducers/DoctorReducer";
import patientReducer from "../Reducers/PatientReducer";
import commonReducer from "../Reducers/CommonReducer";
export default combineReducers({
  admin: adminReducer,
  doctor: doctorReducer,
  patient: patientReducer,
  common: commonReducer,
});
