import * as actions from "./types";

export const setCommonType = (payload) => {
  console.log("payload ", payload);
  return {
    type: actions.SET_COMMON_TYPE,
    payload: payload,
  };
};
