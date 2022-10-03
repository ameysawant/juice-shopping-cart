import { actionTypes } from "../../types/actionTypes";

const youtubeiState = {
  youtubeData: {},
};

export const youtubeReducer = (state = youtubeiState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_YOUTUBE:
      return {
        ...state,
        youtubeData: action.payload,
      };
    default:
      return state;
  }
};
