import { actionTypes } from "../../types/actionTypes";

// export const fetchFilters = (data) => {
//   return {
//     type: actionTypes.FETCH_FILTERS,
//     payload: data,
//   };
// };

export const fetchFilterRequest = () => {
  return {
    type: actionTypes.FETCH_FILTER_REQUEST,
  };
};
export const fetchFilterSuccess = (data) => {
  return {
    type: actionTypes.FETCH_FILTER_SUCCESS,
    payload: data,
  };
};
export const fetchFilterFailure = (error) => {
  return {
    type: actionTypes.FETCH_FILTER_FAILURE,
    payload: error,
  };
};

export const sendFilters = (data) => {
  return {
    type: actionTypes.SEND_FILTERS,
    payload: data, // {id, name}
  };
};
