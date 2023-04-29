import { actionTypes } from "../../types/actionTypes";

const initialState = {
  mainSliderData: null,
  isLoading: false,
  error: null,
};

export const mainSliderReducer = (state = initialState, action) => {
  switch (action.type) {
    // case actionTypes.FETCH_MAINSLIDER:
    //   return {
    //     ...state,
    //     mainSliderData: action.payload,
    //   };

    case actionTypes.FETCH_MAINSLIDER_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: false,
      };

    case actionTypes.FETCH_MAINSLIDER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        mainSliderData: action.payload,
      };

    case actionTypes.FETCH_MAINSLIDER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
