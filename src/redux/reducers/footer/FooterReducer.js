import { actionTypes } from "../../types/actionTypes";

const footeriState = {
  footerData: {},
};

export const footerReducer = (state = footeriState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_FOOTER:
      return {
        ...state,
        footerData: action.payload, //data update
      };
    default:
      return state;
  }
};
