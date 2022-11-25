import { actionTypes } from "../../types/actionTypes";

export const fetchFilters = (data) => {
  return {
    type: actionTypes.FETCH_FILTERS,
    payload: data,
  };
};
