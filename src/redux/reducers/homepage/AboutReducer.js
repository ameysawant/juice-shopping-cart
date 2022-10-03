import { actionTypes } from "../../types/actionTypes";

const aboutiState = {
  aboutData: {},
};

export const aboutReducer = (state = aboutiState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ABOUT:
      return {
        ...state,
        aboutData: action.payload,
      };
    default:
      return state;
  }
};
