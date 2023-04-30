import { actionTypes } from "../../types/actionTypes";

// export const fetchProductList = (data) => {
//   return {
//     type: actionTypes.FETCH_PRODUCT_LIST,
//     payload: data,
//   };
// };

export const fetchProductListRequest = () => {
  return {
    type: actionTypes.FETCH_PRODUCTLIST_REQUEST,
  };
};
export const fetchProductListSuccess = (data) => {
  return {
    type: actionTypes.FETCH_PRODUCTLIST_SUCCESS,
    payload: data,
  };
};
export const fetchProductListFailure = (error) => {
  return {
    type: actionTypes.FETCH_PRODUCTLIST_FAILURE,
    payload: error,
  };
};
