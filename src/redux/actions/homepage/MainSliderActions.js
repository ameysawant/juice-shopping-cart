import { actionTypes } from "../../types/actionTypes";

// export const fetchMainSlider = (data) => {
//   return {
//     type: actionTypes.FETCH_MAINSLIDER,
//     payload: data,
//   };
// };

export const fetchMainSliderRequest = () => {
  return {
    type: actionTypes.FETCH_MAINSLIDER_REQUEST,
  };
};
export const fetchMainSliderSuccess = (data) => {
  return {
    type: actionTypes.FETCH_MAINSLIDER_SUCCESS,
    payload: data,
  };
};
export const fetchMainSliderFailure = (error) => {
  return {
    type: actionTypes.FETCH_MAINSLIDER_FAILURE,
    payload: error,
  };
};

export const getMainSliderApi = () => {
  // const apikey = process.env.REACT_APP_API_KEY;
  // const response = await fetch(
  //   `https://api.json-generator.com/templates/jy5YJ7qSuzOt/data?access_token=${apikey}`
  // );
  return async (dispatch) => {
    try {
      dispatch(fetchMainSliderRequest());
      const response = await fetch(`http://localhost:8000/homepage`);
      if (response.ok) {
        const data = await response.json();
        dispatch(fetchMainSliderSuccess(data.mainSlider));
      } else {
        throw new Error("MainSlider");
      }
    } catch (error) {
      dispatch(fetchMainSliderFailure(error.message));
    }
  };
};
