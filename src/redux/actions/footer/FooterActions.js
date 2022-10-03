import { actionTypes } from "../../types/actionTypes";

export const fetchFooter = (data) => {
  return {
    type: actionTypes.FETCH_FOOTER,
    payload: data,
  };
};
