import { actionTypes } from "../../types/actionTypes";

// export const fetchAbout = (data) => {
//   return {
//     type: actionTypes.FETCH_ABOUT,
//     payload: data,
//   };
// };

export const fetchAboutRequest = () => {
  return {
    type: actionTypes.FETCH_ABOUT_REQUEST,
  };
};
export const fetchAboutSuccess = (data) => {
  return {
    type: actionTypes.FETCH_ABOUT_SUCCESS,
    payload: data,
  };
};
export const fetchAboutFailure = (error) => {
  return {
    type: actionTypes.FETCH_ABOUT_FAILURE,
    payload: error,
  };
};
