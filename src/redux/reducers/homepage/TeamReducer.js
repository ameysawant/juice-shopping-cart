import { actionTypes } from "../../types/actionTypes";

const initialState = {
  teamData: null,
  isLoading: false,
  error: null,
};

export const teamReducer = (state = initialState, action) => {
  switch (action.type) {
    // case actionTypes.FETCH_TEAM:
    //   return {
    //     ...state,
    //     teamData: action.payload,
    //   };

    case actionTypes.FETCH_TEAM_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: false,
      };

    case actionTypes.FETCH_TEAM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        teamData: action.payload,
      };

    case actionTypes.FETCH_TEAM_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
