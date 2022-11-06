import { actionTypes } from "../../types/actionTypes";

const headeriState = {
  hData: {},
  background: "bg-transparent",
  isSlide: false,
};

export const headerReducer = (state = headeriState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_HEADER:
      return {
        ...state,
        hData: action.payload, //data update
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
