import { actionTypes } from "../../types/actionTypes";

const mainSlideriState = {
  mainSliderData: [],
};

export const mainSliderReducer = (state = mainSlideriState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_MAINSLIDER:
      return {
        ...state,
        mainSliderData: action.payload,
      };
    default:
      return state;
  }
};
