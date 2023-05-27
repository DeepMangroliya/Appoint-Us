import * as actions from "../../Actions/types";

const initialState = {
  //   isAuthenticated: false,
  type: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case actions.SET_COMMON_TYPE:
      return {
        ...state,
        type: action.payload,
      };
    default:
      return state;
  }
}
