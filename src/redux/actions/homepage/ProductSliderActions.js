import { actionTypes } from "../../types/actionTypes";

// export const fetchProductSlider = (data) => {
//   return {
//     type: actionTypes.FETCH_PRODUCTSLIDER,
//     payload: data,
//   };
// };

export const fetchProductSliderRequest = () => {
  return {
    type: actionTypes.FETCH_PRODUCTSLIDER_REQUEST,
  };
};
export const fetchProductSliderSuccess = (data) => {
  return {
    type: actionTypes.FETCH_PRODUCTSLIDER_SUCCESS,
    payload: data,
  };
};
export const fetchProductSliderFailure = (error) => {
  return {
    type: actionTypes.FETCH_PRODUCTSLIDER_FAILURE,
    payload: error,
  };
};
