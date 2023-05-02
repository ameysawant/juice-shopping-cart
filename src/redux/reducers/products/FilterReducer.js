import { actionTypes } from "../../types/actionTypes";

const filteriState = {
  filterList: [],
};

export const filterReducer = (state = filteriState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_FILTERS:
      return {
        ...state,
        filterList: action.payload,
      };

    default:
      return state;
  }
};
