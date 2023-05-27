import * as actions from "../../Actions/types";

const initialState = {
  // doctorUser: [],
  doctorUser: {},
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
    case actions.SET_DOCTOR_USER:
      console.log("action ", action.payload);
      return {
        ...state,
        doctorUser: action.payload,
      };
    case actions.SET_DOCTOR_RES_ERROR:
      return {
        ...state,
        resError: action.payload,
      };

    default:
      return state;
  }
}
