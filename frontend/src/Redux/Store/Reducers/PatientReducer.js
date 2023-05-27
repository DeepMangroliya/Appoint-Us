import * as actions from "../../Actions/types";

const initialState = {
  patientUser: {},
  resError: {},
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    // case actions.SET:
    //   return {
    //     ...state,
    //     loading: action.payload,
    //   };
    case actions.SET_PATIENT_USER:
      console.log("action.payload from reducer ", action.payload);
      return {
        ...state,
        patientUser: action.payload,
      };
    case actions.SET_PATIENT_RES_ERROR:
      return {
        ...state,
        resError: action.payload,
      };

    default:
      return state;
  }
}
