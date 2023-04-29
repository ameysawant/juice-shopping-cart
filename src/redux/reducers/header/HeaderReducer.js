import { actionTypes } from "../../types/actionTypes";

const initialState = {
  hData: null,
  isLoading: false,
  error: null,
  background: "bg-transparent",
  isSlide: false,
};

export const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    // case actionTypes.FETCH_HEADER:
    //   return {
    //     ...state,
    //     hData: action.payload, //data update
    //   };

    case actionTypes.FETCH_HEADER_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: false,
      };

    case actionTypes.FETCH_HEADER_SUCCESS:
      return {
        ...state,
        hData: action.payload, // header data
        isLoading: false,
        error: false,
      };

    case actionTypes.FETCH_HEADER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload, // error.message
      };

    case actionTypes.CHANGE_NAV_BG:
      return {
        ...state,
        background: action.payload, //data update
      };
    case actionTypes.OPEN_SLIDE_MENU:
      return {
        ...state,
        isSlide: action.payload, //true
      };
    case actionTypes.CLOSE_SLIDE_MENU:
      return {
        ...state,
        isSlide: action.payload, //false
      };
    default:
      return state;
  }
};
