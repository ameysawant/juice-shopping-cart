import { actionTypes } from "../../types/actionTypes";

export const addToCart = (data) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: data, //{...}
  };
};
