import { actionTypes } from "../../types/actionTypes";

export const fetchMainSlider = (data) => {
  return {
    type: actionTypes.FETCH_MAINSLIDER,
    payload: data,
  };
};
