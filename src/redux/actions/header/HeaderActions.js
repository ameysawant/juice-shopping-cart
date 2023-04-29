import { actionTypes } from "../../types/actionTypes";

// export const fetchHeader = (data) => {
//   return {
//     type: actionTypes.FETCH_HEADER,
//     payload: data,
//   };
// };

export const fetchHeaderRequest = () => {
  return {
    type: actionTypes.FETCH_HEADER_REQUEST,
  };
};
export const fetchHeaderSuccess = (data) => {
  return {
    type: actionTypes.FETCH_HEADER_SUCCESS,
    payload: data,
  };
};
export const fetchHeaderFailure = (error) => {
  return {
    type: actionTypes.FETCH_HEADER_FAILURE,
    payload: error,
  };
};

export const changeNavBg = (bgColor) => {
  return {
    type: actionTypes.CHANGE_NAV_BG,
    payload: bgColor,
  };
};

export const openSlideMenu = (data) => {
  return {
    type: actionTypes.OPEN_SLIDE_MENU,
    payload: data,
  };
};

export const closeSlideMenu = (data) => {
  return {
    type: actionTypes.CLOSE_SLIDE_MENU,
    payload: data,
  };
};
