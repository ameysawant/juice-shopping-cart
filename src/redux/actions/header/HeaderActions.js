import { actionTypes } from "../../types/actionTypes";

// export const fetchHeader = (data) => {
//   return {
//     type: actionTypes.FETCH_HEADER,
//     payload: data,
//   };
// };

export const fetchHeaderRequest = () => {
  return {
    type: actionTypes.FETCH_HEADER_REQUEST,
  };
};
export const fetchHeaderSuccess = (data) => {
  return {
    type: actionTypes.FETCH_HEADER_SUCCESS,
    payload: data,
  };
};
export const fetchHeaderFailure = (error) => {
  return {
    type: actionTypes.FETCH_HEADER_FAILURE,
    payload: error,
  };
};

export const getHeaderApi = () => {
  // const apikey = process.env.REACT_APP_API_KEY;
  // const response = await fetch(
  //   `https://api.json-generator.com/templates/jy5YJ7qSuzOt/data?access_token=${apikey}`
  // );
  return async (dispatch) => {
    try {
      dispatch(fetchHeaderRequest());
      const response = await fetch(`http://localhost:8000/homepage`);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        dispatch(fetchHeaderSuccess(data.header));
      } else {
        throw new Error("Header");
      }
    } catch (error) {
      dispatch(fetchHeaderFailure(error.message));
    }
  };
};

export const changeNavBg = (bgColor) => {
  return {
    type: actionTypes.CHANGE_NAV_BG,
    payload: bgColor,
  };
};

export const openSlideMenu = (data) => {
  return {
    type: actionTypes.OPEN_SLIDE_MENU,
    payload: data,
  };
};

export const closeSlideMenu = (data) => {
  return {
    type: actionTypes.CLOSE_SLIDE_MENU,
    payload: data,
  };
};
