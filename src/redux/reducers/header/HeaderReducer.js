const headeriState = {
  hData: {},
};

export const headerReducer = (state = headeriState, action) => {
  switch (action.type) {
    case "FETCH_HEADER":
      return {
        ...state,
        hData: action.payload, //data update
      };
    default:
      return state;
  }
};
