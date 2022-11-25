import { actionTypes } from "../../types/actionTypes";

export const fetchProductList = (data) => {
  return {
    type: actionTypes.FETCH_PRODUCT_LIST,
    payload: data,
  };
};
