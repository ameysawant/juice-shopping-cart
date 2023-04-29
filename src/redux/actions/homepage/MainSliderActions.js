import { actionTypes } from "../../types/actionTypes";

// export const fetchMainSlider = (data) => {
//   return {
//     type: actionTypes.FETCH_MAINSLIDER,
//     payload: data,
//   };
// };

export const fetchMainSliderRequest = () => {
  return {
    type: actionTypes.FETCH_MAINSLIDER_REQUEST,
  };
};
export const fetchMainSliderSuccess = (data) => {
  return {
    type: actionTypes.FETCH_MAINSLIDER_SUCCESS,
    payload: data,
  };
};
export const fetchMainSliderFailure = (error) => {
  return {
    type: actionTypes.FETCH_MAINSLIDER_FAILURE,
    payload: error,
  };
};
