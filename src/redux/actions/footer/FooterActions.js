import { actionTypes } from "../../types/actionTypes";

// export const fetchFooter = (data) => {
//   return {
//     type: actionTypes.FETCH_FOOTER,
//     payload: data,
//   };
// };

export const fetchFooterRequest = () => {
  return {
    type: actionTypes.FETCH_FOOTER_REQUEST,
  };
};
export const fetchFooterSuccess = (data) => {
  return {
    type: actionTypes.FETCH_FOOTER_SUCCESS,
    payload: data,
  };
};
export const fetchFooterFailure = (error) => {
  return {
    type: actionTypes.FETCH_FOOTER_FAILURE,
    payload: error,
  };
};
