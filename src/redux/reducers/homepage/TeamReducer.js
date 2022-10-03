import { actionTypes } from "../../types/actionTypes";

const teamiState = {
  teamData: [],
};

export const teamReducer = (state = teamiState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_TEAM:
      return {
        ...state,
        teamData: action.payload,
      };
    default:
      return state;
  }
};
