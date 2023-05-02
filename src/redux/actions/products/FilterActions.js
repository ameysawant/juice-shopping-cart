import { actionTypes } from "../../types/actionTypes";

export const fetchFilters = (data) => {
  return {
    type: actionTypes.FETCH_FILTERS,
    payload: data,
  };
};

export const sendFilters = (data) => {
  return {
    type: actionTypes.SEND_FILTERS,
    payload: data, // {id, name}
  };
};
