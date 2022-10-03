import { actionTypes } from "../../types/actionTypes";

export const fetchAbout = (data) => {
  return {
    type: actionTypes.FETCH_ABOUT,
    payload: data,
  };
};
