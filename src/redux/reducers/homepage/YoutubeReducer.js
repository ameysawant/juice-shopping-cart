const youtubeiState = {
  youtubeData: {},
};

export const youtubeReducer = (state = youtubeiState, action) => {
  switch (action.type) {
    case "FETCH_YOUTUBE":
      return {
        ...state,
        youtubeData: action.payload,
      };
    default:
      return state;
  }
};
