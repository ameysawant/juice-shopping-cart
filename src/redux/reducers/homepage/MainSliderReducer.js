const mainSlideriState = {
  mainSliderData: [],
};

export const mainSliderReducer = (state = mainSlideriState, action) => {
  switch (action.type) {
    case "FETCH_MAINSLIDER":
      return {
        ...state,
        mainSliderData: action.payload,
      };
    default:
      return state;
  }
};
