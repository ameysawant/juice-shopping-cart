import { actionTypes } from "../../types/actionTypes";

const headeriState = {
  hData: {},
};

export const headerReducer = (state = headeriState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_HEADER:
      return {
        ...state,
        hData: action.payload, //data update
      };
    default:
      return state;
  }
};
