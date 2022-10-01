const teamiState = {
  teamData: [],
};

export const teamReducer = (state = teamiState, action) => {
  switch (action.type) {
    case "FETCH_TEAM":
      return {
        ...state,
        teamData: action.payload,
      };
    default:
      return state;
  }
};
