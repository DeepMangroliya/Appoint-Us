import * as actions from "../../Actions/types";

const initialState = {
  //   isAuthenticated: false,
  adminUser: {},
  resError: {},
  //   resSuccess: "",
  loading: false,
  adminProfile: [],
  patientUsers: [],
  doctorUsers: [],
  eBill: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case actions.SET_ADMIN_LOADER:
      return {
        ...state,
        loading: action.payload,
      };
    case actions.SET_ADMIN_USER:
      return {
        ...state,
        adminUser: action.payload,
      };
    case actions.SET_ADMIN_PROFILE:
      return {
        ...state,
        adminProfile: action.payload,
      };
    case actions.SET_ADMIN_RES_ERROR:
      return {
        ...state,
        resError: action.payload,
      };
    case actions.SET_ADMIN_PATIENTS:
      return {
        ...state,
        patientUsers: action.payload,
      };
    case actions.SET_ADMIN_DOCTORS:
      return {
        ...state,
        doctorUsers: action.payload,
      };
    case actions.SET_ADMIN_EBILL:
      return {
        ...state,
        eBill: action.payload,
      };
    // case actions.SET_AUTH_RES_SUCCESS:
    //   return {
    //     ...state,
    //     resSuccess: action.payload,
    //   };
    // case actions.CLEAR_AUTH_RES_MSG:
    //   return {
    //     ...state,
    //     resError: {},
    //     resSuccess: "",
    //   };
    // case actions.CLEAR_AUTH_DATA:
    //   return initialState;
    default:
      return state;
  }
}
