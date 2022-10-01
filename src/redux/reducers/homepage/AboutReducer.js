const aboutiState = {
  aboutData: {},
};

export const aboutReducer = (state = aboutiState, action) => {
  switch (action.type) {
    case "FETCH_ABOUT":
      return {
        ...state,
        aboutData: action.payload,
      };
    default:
      return state;
  }
};
