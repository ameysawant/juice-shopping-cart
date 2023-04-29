import { actionTypes } from "../../types/actionTypes";

const initialState = {
  productSliderData: null,
  isLoading: false,
  error: null,
};

export const productSliderReducer = (state = initialState, action) => {
  switch (action.type) {
    // case actionTypes.FETCH_PRODUCTSLIDER:
    //   return {
    //     ...state,
    //     productSliderData: action.payload,
    //   };

    case actionTypes.FETCH_PRODUCTSLIDER_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: false,
      };

    case actionTypes.FETCH_PRODUCTSLIDER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        productSliderData: action.payload,
      };

    case actionTypes.FETCH_PRODUCTSLIDER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
