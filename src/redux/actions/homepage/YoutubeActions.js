import { actionTypes } from "../../types/actionTypes";

export const fetchYoutube = (data) => {
  return {
    type: actionTypes.FETCH_YOUTUBE,
    payload: data,
  };
};
