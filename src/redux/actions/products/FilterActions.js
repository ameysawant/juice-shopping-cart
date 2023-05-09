import { actionTypes } from "../../types/actionTypes";

// export const fetchFilters = (data) => {
//   return {
//     type: actionTypes.FETCH_FILTERS,
//     payload: data,
//   };
// };

export const fetchFilterRequest = () => {
  return {
    type: actionTypes.FETCH_FILTER_REQUEST,
  };
};
export const fetchFilterSuccess = (data) => {
  return {
    type: actionTypes.FETCH_FILTER_SUCCESS,
    payload: data,
  };
};
export const fetchFilterFailure = (error) => {
  return {
    type: actionTypes.FETCH_FILTER_FAILURE,
    payload: error,
  };
};

export const getFilterApi = () => {
  // const apikey = process.env.REACT_APP_API_KEY;
  // const response = await fetch(
  //   `https://api.json-generator.com/templates/jy5YJ7qSuzOt/data?access_token=${apikey}`
  // );
  return async (dispatch) => {
    try {
      dispatch(fetchFilterRequest());
      const response = await fetch(`http://localhost:8000/shop`);
      if (response.ok) {
        const data = await response.json();
        dispatch(fetchFilterSuccess(data.filters));
      } else {
        throw new Error("Filter List");
      }
    } catch (error) {
      dispatch(fetchFilterFailure(error.message));
    }
  };
};

export const sendFilters = (data) => {
  return {
    type: actionTypes.SEND_FILTERS,
    payload: data, // {id, name}
  };
};
