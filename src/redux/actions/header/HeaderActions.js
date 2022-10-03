import { actionTypes } from "../../types/actionTypes";

export const fetchHeader = (data) => {
  return {
    type: actionTypes.FETCH_HEADER,
    payload: data,
  };
};
