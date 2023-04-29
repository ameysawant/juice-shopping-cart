import { actionTypes } from "../../types/actionTypes";

const initialState = {
  aboutData: null,
  isLoading: false,
  error: null,
};

export const aboutReducer = (state = initialState, action) => {
  switch (action.type) {
    // case actionTypes.FETCH_ABOUT:
    //   return {
    //     ...state,
    //     aboutData: action.payload,
    //   };

    case actionTypes.FETCH_ABOUT_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: false,
      };

    case actionTypes.FETCH_ABOUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        aboutData: action.payload,
      };

    case actionTypes.FETCH_ABOUT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
