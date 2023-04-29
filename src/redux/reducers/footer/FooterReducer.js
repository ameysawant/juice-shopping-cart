import { actionTypes } from "../../types/actionTypes";

const initialState = {
  footerData: null,
  isLoading: false,
  error: null,
};

export const footerReducer = (state = initialState, action) => {
  switch (action.type) {
    // case actionTypes.FETCH_FOOTER:
    //   return {
    //     ...state,
    //     footerData: action.payload, //data update
    //   };

    case actionTypes.FETCH_FOOTER_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: false,
      };

    case actionTypes.FETCH_FOOTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        footerData: action.payload,
      };

    case actionTypes.FETCH_FOOTER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
