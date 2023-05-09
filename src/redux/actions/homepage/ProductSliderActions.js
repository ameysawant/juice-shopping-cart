import { actionTypes } from "../../types/actionTypes";

// export const fetchProductSlider = (data) => {
//   return {
//     type: actionTypes.FETCH_PRODUCTSLIDER,
//     payload: data,
//   };
// };

export const fetchProductSliderRequest = () => {
  return {
    type: actionTypes.FETCH_PRODUCTSLIDER_REQUEST,
  };
};
export const fetchProductSliderSuccess = (data) => {
  return {
    type: actionTypes.FETCH_PRODUCTSLIDER_SUCCESS,
    payload: data,
  };
};
export const fetchProductSliderFailure = (error) => {
  return {
    type: actionTypes.FETCH_PRODUCTSLIDER_FAILURE,
    payload: error,
  };
};

export const getProductSliderApi = () => {
  // const apikey = process.env.REACT_APP_API_KEY;
  // const response = await fetch(
  //   `https://api.json-generator.com/templates/jy5YJ7qSuzOt/data?access_token=${apikey}`
  // );

  return async (dispatch) => {
    try {
      dispatch(fetchProductSliderRequest());
      const response = await fetch(`http://localhost:8000/homepage`);
      if (response.ok) {
        const data = await response.json();
        dispatch(fetchProductSliderSuccess(data.productSlider));
      } else {
        throw new Error("ProductSlider");
      }
    } catch (error) {
      dispatch(fetchProductSliderFailure(error.message));
    }
  };
};
