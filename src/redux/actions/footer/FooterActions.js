import { actionTypes } from "../../types/actionTypes";

// export const fetchFooter = (data) => {
//   return {
//     type: actionTypes.FETCH_FOOTER,
//     payload: data,
//   };
// };

export const fetchFooterRequest = () => {
  return {
    type: actionTypes.FETCH_FOOTER_REQUEST,
  };
};
export const fetchFooterSuccess = (data) => {
  return {
    type: actionTypes.FETCH_FOOTER_SUCCESS,
    payload: data,
  };
};
export const fetchFooterFailure = (error) => {
  return {
    type: actionTypes.FETCH_FOOTER_FAILURE,
    payload: error,
  };
};

export const getFooterApi = () => {
  // const apikey = process.env.REACT_APP_API_KEY;
  // const response = await fetch(
  //   `https://api.json-generator.com/templates/jy5YJ7qSuzOt/data?access_token=${apikey}`
  // );

  return async (dispatch) => {
    try {
      dispatch(fetchFooterRequest());
      const response = await fetch(`http://localhost:8000/homepage`);
      if (response.ok) {
        const data = await response.json();
        dispatch(fetchFooterSuccess(data.footer));
      } else {
        throw new Error("Footer");
      }
    } catch (error) {
      dispatch(fetchFooterFailure(error.message));
    }
  };
};
