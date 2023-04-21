import { actionTypes } from "../../types/actionTypes";

const youtubeiState = {
  youtubeData: {},
  isClicked: false,
};

export const youtubeReducer = (state = youtubeiState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_YOUTUBE:
      return {
        ...state,
        youtubeData: action.payload,
      };
    // case actionTypes.OPEN_VIDEO:
    //   return {
    //     ...state,
    //     isClicked: action.payload,
    //   };
    // case actionTypes.CLOSE_VIDEO:
    //   return {
    //     ...state,
    //     isClicked: action.payload,
    //   };
    default:
      return state;
  }
};
