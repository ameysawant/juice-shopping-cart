import { actionTypes } from "../../types/actionTypes";

const productSlideriState = {
  productSliderData: [],
};

export const productSliderReducer = (state = productSlideriState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTSLIDER:
      return {
        ...state,
        productSliderData: action.payload,
      };
    default:
      return state;
  }
};
