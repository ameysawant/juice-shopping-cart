import { actionTypes } from "../../types/actionTypes";

export const fetchHeader = (data) => {
  return {
    type: actionTypes.FETCH_HEADER,
    payload: data,
  };
};

export const changeNavBg = (bgColor) => {
  return {
    type: actionTypes.CHANGE_NAV_BG,
    payload: bgColor,
  };
};
