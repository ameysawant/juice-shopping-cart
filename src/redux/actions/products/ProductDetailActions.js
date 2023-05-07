import { actionTypes } from "../../types/actionTypes";

// export const fetchProductDetail = (data) => {
//   return {
//     type: actionTypes.FETCH_PRODUCT_DETAIL,
//     payload: data,
//   };
// };

export const fetchProductDetailRequest = () => {
  return {
    type: actionTypes.FETCH_PRODUCTDETAIL_REQUEST,
  };
};
export const fetchProductDetailSuccess = (data) => {
  return {
    type: actionTypes.FETCH_PRODUCTDETAIL_SUCCESS,
    payload: data,
  };
};
export const fetchProductDetailFailure = (error) => {
  return {
    type: actionTypes.FETCH_PRODUCTDETAIL_FAILURE,
    payload: error,
  };
};
