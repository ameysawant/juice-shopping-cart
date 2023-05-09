import { actionTypes } from "../../types/actionTypes";

// export const fetchAbout = (data) => {
//   return {
//     type: actionTypes.FETCH_ABOUT,
//     payload: data,
//   };
// };

export const fetchAboutRequest = () => {
  return {
    type: actionTypes.FETCH_ABOUT_REQUEST,
  };
};
export const fetchAboutSuccess = (data) => {
  return {
    type: actionTypes.FETCH_ABOUT_SUCCESS,
    payload: data,
  };
};
export const fetchAboutFailure = (error) => {
  return {
    type: actionTypes.FETCH_ABOUT_FAILURE,
    payload: error,
  };
};

export const getAboutApi = () => {
  // const apikey = process.env.REACT_APP_API_KEY;
  // const response = await fetch(
  //   `https://api.json-generator.com/templates/jy5YJ7qSuzOt/data?access_token=${apikey}`
  // );
  return async (dispatch) => {
    try {
      dispatch(fetchAboutRequest());
      const response = await fetch(`http://localhost:8000/homepage`);
      if (response.ok) {
        const data = await response.json();
        dispatch(fetchAboutSuccess(data.aboutus));
      } else {
        throw new Error("About");
      }
    } catch (error) {
      dispatch(fetchAboutFailure(error.message));
    }
  };
};
