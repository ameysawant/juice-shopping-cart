import { actionTypes } from "../../types/actionTypes";

export const fetchProductSlider = (data) => {
  return {
    type: actionTypes.FETCH_PRODUCTSLIDER,
    payload: data,
  };
};
