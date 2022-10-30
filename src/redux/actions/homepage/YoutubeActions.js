import { actionTypes } from "../../types/actionTypes";

export const fetchYoutube = (data) => {
  return {
    type: actionTypes.FETCH_YOUTUBE,
    payload: data,
  };
};

export const openVideo = (data) => {
  return {
    type: actionTypes.OPEN_VIDEO,
    payload: data,
  };
};

export const closeVideo = (data) => {
  return {
    type: actionTypes.CLOSE_VIDEO,
    payload: data,
  };
};
