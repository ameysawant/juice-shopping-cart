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

export const getYoutubeApi = () => {
  // const apikey = process.env.REACT_APP_API_KEY;
  // const response = await fetch(
  //   `https://api.json-generator.com/templates/jy5YJ7qSuzOt/data?access_token=${apikey}`
  // );

  return async (dispatch) => {
    try {
      dispatch(fetchYoutubeRequest());
      const response = await fetch(`http://localhost:8000/homepage`);
      if (response.ok) {
        const data = await response.json();
        dispatch(fetchYoutubeSuccess(data.youtube));
      } else {
        throw new Error("Youtube");
      }
    } catch (error) {
      dispatch(fetchYoutubeFailure(error.message));
    }
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
