import { actionTypes } from "../../types/actionTypes";

const initialState = {
  filterList: [],
  isLoading: false,
  error: null,
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    // case actionTypes.FETCH_FILTERS:
    //   return {
    //     ...state,
    //     filterList: action.payload,
    //   };

    case actionTypes.FETCH_FILTER_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: false,
      };

    case actionTypes.FETCH_FILTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        filterList: action.payload, //data
      };

    case actionTypes.FETCH_FILTER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload, // error.message
      };

    default:
      return state;
  }
};
