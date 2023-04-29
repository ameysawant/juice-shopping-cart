import { actionTypes } from "../../types/actionTypes";

// export const fetchYoutube = (data) => {
//   return {
//     type: actionTypes.FETCH_YOUTUBE,
//     payload: data,
//   };
// };

export const fetchYoutubeRequest = (data) => {
  return {
    type: actionTypes.FETCH_YOUTUBE_REQUEST,
    payload: data,
  };
};
export const fetchYoutubeSuccess = (data) => {
  return {
    type: actionTypes.FETCH_YOUTUBE_SUCCESS,
    payload: data,
  };
};
export const fetchYoutubeFailure = (data) => {
  return {
    type: actionTypes.FETCH_YOUTUBE_FAILURE,
    payload: data,
  };
};

// export const openVideo = (data) => {
//   return {
//     type: actionTypes.OPEN_VIDEO,
//     payload: data,
//   };
// };

// export const closeVideo = (data) => {
//   return {
//     type: actionTypes.CLOSE_VIDEO,
//     payload: data,
//   };
// };
