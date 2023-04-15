import { actionTypes } from "../../types/actionTypes";

export const fetchProductDetail = (data) => {
  return {
    type: actionTypes.FETCH_PRODUCT_DETAIL,
    payload: data,
  };
};
