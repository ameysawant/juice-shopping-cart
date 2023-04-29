import { actionTypes } from "../../types/actionTypes";

const initialState = {
  youtubeData: null,
  isLoading: false,
  error: null,
  // isClicked: false,
};

export const youtubeReducer = (state = initialState, action) => {
  switch (action.type) {
    // case actionTypes.FETCH_YOUTUBE:
    //   return {
    //     ...state,
    //     youtubeData: action.payload,
    //   };

    case actionTypes.FETCH_YOUTUBE_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: false,
      };

    case actionTypes.FETCH_YOUTUBE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        youtubeData: action.payload,
      };

    case actionTypes.FETCH_YOUTUBE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
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
